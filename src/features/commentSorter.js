import {
  findCommentsWrapper,
  sortCommentBlocks,
  getCommentBlocks,
} from '../utils/dom.js';
import { readUserSortOrder, storeUserSortOrder } from '../utils/storage.js';
import { controlsManager } from '../ui/controlsManager.js';

export function initCommentSorter() {
  const wrapper = findCommentsWrapper();
  if (!wrapper) return;

  if (
    controlsManager.getFeature('commentSorter') &&
    document.querySelector('.linear-controls-wrapper')
  ) {
    return;
  }

  if (
    controlsManager.getFeature('commentSorter') &&
    !document.querySelector('.linear-controls-wrapper')
  ) {
    controlsManager.unregisterFeature('commentSorter');
  }

  controlsManager.init(wrapper);
  const sortContainer = createSortContainer();
  controlsManager.registerFeature('commentSorter', sortContainer);

  const select = sortContainer.querySelector('#linear-sort-select');
  const storedOrder = readUserSortOrder();
  select.value = storedOrder;
  sortCommentBlocks(wrapper, storedOrder);

  let commentCount = getCommentBlocks(wrapper).length;
  const knownCommentIds = new Set(
    getCommentBlocks(wrapper)
      .map(block => {
        const commentEl = block.querySelector(
          'div[id^="comment-"][id$="-container"]'
        );
        return commentEl ? commentEl.id : null;
      })
      .filter(Boolean)
  );

  const observer = new MutationObserver(() => {
    const currentBlocks = getCommentBlocks(wrapper);
    const currentCount = currentBlocks.length;

    if (currentCount > commentCount) {
      const newComment = findNewComment(currentBlocks, knownCommentIds);
      if (newComment) {
        handleNewComment(wrapper, select.value, newComment);
        const commentEl = newComment.querySelector(
          'div[id^="comment-"][id$="-container"]'
        );
        if (commentEl) knownCommentIds.add(commentEl.id);
      }
      commentCount = currentCount;
    } else {
      commentCount = currentCount;
    }
  });

  observer.observe(wrapper, { childList: true, subtree: true });

  select.addEventListener('change', () => {
    const newOrder = select.value;
    sortCommentBlocks(wrapper, newOrder);
    storeUserSortOrder(newOrder);
  });
}

function createSortContainer() {
  const sortContainer = document.createElement('div');
  sortContainer.className = 'linear-sort-container';

  const label = document.createElement('label');
  label.setAttribute('for', 'linear-sort-select');
  label.className = 'sort-label';
  label.textContent = 'Sort:';
  sortContainer.appendChild(label);

  const select = document.createElement('select');
  select.id = 'linear-sort-select';
  select.className = 'sort-select';

  const optAsc = document.createElement('option');
  optAsc.value = 'asc';
  optAsc.textContent = 'Oldest → Newest';
  select.appendChild(optAsc);

  const optDesc = document.createElement('option');
  optDesc.value = 'desc';
  optDesc.textContent = 'Newest → Oldest';
  select.appendChild(optDesc);

  sortContainer.appendChild(select);
  return sortContainer;
}

function findNewComment(currentBlocks, knownCommentIds) {
  for (const block of currentBlocks) {
    const commentEl = block.querySelector(
      'div[id^="comment-"][id$="-container"]'
    );
    if (commentEl && !knownCommentIds.has(commentEl.id)) {
      return block;
    }
  }
  return null;
}

function handleNewComment(wrapper, sortOrder, newCommentBlock) {
  if (sortOrder === 'desc' && wrapper.dataset.reversed === 'true') {
    const blocks = getCommentBlocks(wrapper);
    if (blocks.length > 1 && newCommentBlock) {
      const firstComment = blocks[0];
      if (newCommentBlock !== firstComment) {
        wrapper.insertBefore(newCommentBlock, firstComment);
      }
    }
  }
}
