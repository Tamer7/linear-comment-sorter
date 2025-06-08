import { findCommentsWrapper } from '../utils/dom.js';
import { readCommentToTop, storeCommentToTop } from '../utils/storage.js';
import { controlsManager } from '../ui/controlsManager.js';

export function initCommentFormToTop() {
  const wrapper = findCommentsWrapper();
  if (!wrapper) return;

  if (
    controlsManager.getFeature('commentFormToTop') &&
    document.querySelector('.linear-controls-wrapper')
  ) {
    return;
  }

  if (
    controlsManager.getFeature('commentFormToTop') &&
    !document.querySelector('.linear-controls-wrapper')
  ) {
    controlsManager.unregisterFeature('commentFormToTop');
  }

  controlsManager.init(wrapper);

  const formContainer = createCommentFormToTopContainer();

  controlsManager.registerFeature('commentFormToTop', formContainer);

  const checkbox = formContainer.querySelector('#comment-to-top-checkbox');

  const shouldMoveToTop = readCommentToTop();
  checkbox.checked = shouldMoveToTop;

  setTimeout(() => {
    toggleCommentFormPosition(shouldMoveToTop);
  }, 100);

  checkbox.addEventListener('change', () => {
    const moveToTop = checkbox.checked;
    storeCommentToTop(moveToTop);
    toggleCommentFormPosition(moveToTop);
  });
}

function createCommentFormToTopContainer() {
  const formContainer = document.createElement('div');
  formContainer.className = 'comment-form-to-top-container';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'comment-to-top-checkbox';
  checkbox.className = 'comment-form-to-top-checkbox';

  const label = document.createElement('label');
  label.setAttribute('for', 'comment-to-top-checkbox');
  label.className = 'comment-form-to-top-label';
  label.textContent = 'Comment form to top';

  formContainer.appendChild(checkbox);
  formContainer.appendChild(label);

  return formContainer;
}

function findCommentForm() {
  const formSelectors = [
    'form[class*="sc-lhuHip"]',
    'form:has(.ProseMirror.editor)',
    'form:has([aria-label*="Comment"])',
    'form:has([placeholder*="comment" i])',
    'div:has(.ProseMirror.editor):not([id*="comment-"])',
  ];

  for (const selector of formSelectors) {
    try {
      const form = document.querySelector(selector);
      if (form && isCommentForm(form)) {
        return form;
      }
    } catch {
      //
    }
  }

  return null;
}

function isCommentForm(element) {
  const hasEditor = element.querySelector('.ProseMirror.editor');
  const hasCommentPlaceholder =
    element.querySelector('[placeholder*="comment" i]') ||
    element.querySelector('[aria-label*="Comment"]');
  const isNotExistingComment = !element.closest(
    '[id*="comment-"][id*="-container"]'
  );

  return hasEditor && hasCommentPlaceholder && isNotExistingComment;
}

function toggleCommentFormPosition(moveToTop) {
  const wrapper = findCommentsWrapper();
  const form = findCommentForm();

  if (!wrapper || !form) return;

  if (moveToTop) {
    const parentElement = wrapper.parentElement;
    if (
      parentElement &&
      !form.classList.contains('linear-comment-form-moved-to-top')
    ) {
      form.dataset.originalParent = 'wrapper';
      form.dataset.originalPosition = Array.from(wrapper.children).indexOf(
        form
      );

      parentElement.insertBefore(form, wrapper);
      form.classList.add('linear-comment-form-moved-to-top');
    }
  } else {
    if (form.classList.contains('linear-comment-form-moved-to-top')) {
      const originalPosition = parseInt(form.dataset.originalPosition) || -1;

      if (originalPosition >= 0 && originalPosition < wrapper.children.length) {
        const referenceNode = wrapper.children[originalPosition];
        wrapper.insertBefore(form, referenceNode);
      } else {
        wrapper.appendChild(form);
      }

      form.classList.remove('linear-comment-form-moved-to-top');
      delete form.dataset.originalParent;
      delete form.dataset.originalPosition;
    }
  }
}
