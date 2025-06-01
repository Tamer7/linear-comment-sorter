import { findCommentsWrapper } from '../utils/dom.js';
import { readHideEvents, storeHideEvents } from '../utils/storage.js';

export function initHideEventsToggle() {
  const wrapper = findCommentsWrapper();
  if (!wrapper) return;

  if (document.querySelector('.hide-events-container')) return;

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

  const sortContainer = document.querySelector('.linear-sort-container');
  if (sortContainer && sortContainer.parentElement) {
    sortContainer.parentElement.insertBefore(hideContainer, wrapper);
  }

  const wasHidden = readHideEvents();
  checkbox.checked = wasHidden;

  toggleEventVisibility(!wasHidden);

  checkbox.addEventListener('change', () => {
    const hide = checkbox.checked;
    storeHideEvents(hide);
    toggleEventVisibility(!hide);
  });
}

function toggleEventVisibility(show) {
  document.querySelectorAll('[data-history-entry-id]').forEach(entry => {
    if (entry.closest("div[id^='comment-'][id$='-container']")) return;

    const topWrapper = entry.closest('div.sc-jWpGds.ktahlZ');
    if (topWrapper) topWrapper.style.display = show ? '' : 'none';
  });
}
