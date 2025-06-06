import { findCommentsWrapper } from '../utils/dom.js';
import { readHideEvents, storeHideEvents } from '../utils/storage.js';
import { controlsManager } from '../ui/controlsManager.js';

export function initHideEventsToggle() {
  const wrapper = findCommentsWrapper();
  if (!wrapper) return;

  controlsManager.init(wrapper);

  const hideContainer = createHideEventsContainer();

  controlsManager.registerFeature('hideEventsToggle', hideContainer);

  const checkbox = hideContainer.querySelector('#hide-events-checkbox');

  const wasHidden = readHideEvents();
  checkbox.checked = wasHidden;

  toggleEventVisibility(!wasHidden);

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
  document.querySelectorAll('div.sc-jnGgBm.KGrRD').forEach(container => {
    if (container.querySelector("div[id^='comment-'][id$='-container']"))
      return;

    if (container.querySelector('[data-history-entry-id]')) {
      container.style.display = show ? '' : 'none';
    }
  });
}
