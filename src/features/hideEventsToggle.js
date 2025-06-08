import { findCommentsWrapper } from '../utils/dom.js';
import { readHideEvents, storeHideEvents } from '../utils/storage.js';
import { controlsManager } from '../ui/controlsManager.js';

export function initHideEventsToggle() {
  const wrapper = findCommentsWrapper();
  if (!wrapper) return;

  if (
    controlsManager.getFeature('hideEventsToggle') &&
    document.querySelector('.linear-controls-wrapper')
  ) {
    return;
  }

  if (
    controlsManager.getFeature('hideEventsToggle') &&
    !document.querySelector('.linear-controls-wrapper')
  ) {
    controlsManager.unregisterFeature('hideEventsToggle');
  }

  controlsManager.init(wrapper);

  const hideContainer = createHideEventsContainer();

  controlsManager.registerFeature('hideEventsToggle', hideContainer);

  const checkbox = hideContainer.querySelector('#hide-events-checkbox');

  const wasHidden = readHideEvents();
  checkbox.checked = wasHidden;

  setTimeout(() => {
    toggleEventVisibility(!wasHidden);
  }, 100);

  checkbox.addEventListener('change', () => {
    const hide = checkbox.checked;
    storeHideEvents(hide);
    toggleEventVisibility(!hide);
  });
}

function createHideEventsContainer() {
  const hideContainer = document.createElement('div');
  hideContainer.className = 'hide-events-container';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'hide-events-checkbox';
  checkbox.className = 'hide-events-checkbox';

  const label = document.createElement('label');
  label.setAttribute('for', 'hide-events-checkbox');
  label.className = 'hide-events-label';
  label.textContent = 'Hide events';

  hideContainer.appendChild(checkbox);
  hideContainer.appendChild(label);

  return hideContainer;
}

function toggleEventVisibility(show) {
  // More robust event detection - look for various patterns
  const wrapper = findCommentsWrapper();
  if (!wrapper) return;

  const children = Array.from(wrapper.children);

  children.forEach(container => {
    // Skip if this contains a comment
    if (container.querySelector("div[id^='comment-'][id$='-container']"))
      return;
    if (container.querySelector('[data-testid="issue-comment"]')) return;

    // Look for event indicators
    const isEvent =
      container.querySelector('[data-history-entry-id]') ||
      container.querySelector('[class*="history"]') ||
      container.querySelector('[class*="event"]') ||
      container.querySelector('[class*="activity"]') ||
      // Look for common event text patterns
      (container.textContent &&
        (container.textContent.includes('moved this issue') ||
          container.textContent.includes('changed the status') ||
          container.textContent.includes('assigned') ||
          container.textContent.includes('unassigned') ||
          container.textContent.includes('added label') ||
          container.textContent.includes('removed label') ||
          container.textContent.includes('changed priority') ||
          container.textContent.includes('changed estimate')));

    if (isEvent) {
      container.style.display = show ? '' : 'none';
    }
  });
}
