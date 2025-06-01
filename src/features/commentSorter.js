import { findCommentsWrapper, sortCommentBlocks } from '../utils/dom.js';
import { readUserSortOrder, storeUserSortOrder } from '../utils/storage.js';

export function initCommentSorter() {
  const wrapper = findCommentsWrapper();
  if (!wrapper) return;

  //test

  if (document.querySelector('.linear-sort-container')) return;

  const container = document.createElement('div');
  container.className = 'linear-sort-container';

  const label = document.createElement('label');
  label.textContent = '';
  label.setAttribute('for', 'linear-sort-select');
  label.className = 'sort-label';
  container.appendChild(label);

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

  container.appendChild(select);

  wrapper.parentElement.insertBefore(container, wrapper);

  const storedOrder = readUserSortOrder();
  select.value = storedOrder;
  sortCommentBlocks(wrapper, storedOrder);

  select.addEventListener('change', () => {
    const newOrder = select.value;
    sortCommentBlocks(wrapper, newOrder);
    storeUserSortOrder(newOrder);
  });
}
