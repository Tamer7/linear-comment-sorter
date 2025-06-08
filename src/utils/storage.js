const SORT_KEY = 'linearSortOrder';
const HIDE_KEY = 'linearHideEvents';
const ACCORDION_KEY = 'linearAccordionCollapsed';
const COMMENT_TO_TOP_KEY = 'linearCommentToTop';

export function readUserSortOrder() {
  try {
    const val = localStorage.getItem(SORT_KEY);
    if (val === 'asc' || val === 'desc') return val;
  } catch (error) {
    console.error('Failed to read sort order from localStorage:', error);
  }
  return 'asc';
}

export function storeUserSortOrder(order) {
  try {
    localStorage.setItem(SORT_KEY, order);
  } catch (error) {
    console.error('Failed to store sort order to localStorage:', error);
  }
}

export function readHideEvents() {
  try {
    const val = localStorage.getItem(HIDE_KEY);
    if (val === 'true') return true;
    if (val === 'false') return false;
  } catch (error) {
    console.error('Failed to read hide events state from localStorage:', error);
  }
  return false;
}

export function storeHideEvents(hide) {
  try {
    localStorage.setItem(HIDE_KEY, hide ? 'true' : 'false');
  } catch (error) {
    console.error('Failed to store hide events state to localStorage:', error);
  }
}

export function readAccordionState() {
  try {
    const val = localStorage.getItem(ACCORDION_KEY);
    if (val === 'true') return true;
    if (val === 'false') return false;
  } catch (error) {
    console.error('Failed to read accordion state from localStorage:', error);
  }
  return false;
}

export function storeAccordionState(collapsed) {
  try {
    localStorage.setItem(ACCORDION_KEY, collapsed ? 'true' : 'false');
  } catch (error) {
    console.error('Failed to store accordion state to localStorage:', error);
  }
}

export function readCommentToTop() {
  try {
    const val = localStorage.getItem(COMMENT_TO_TOP_KEY);
    if (val === 'true') return true;
    if (val === 'false') return false;
  } catch (error) {
    console.error(
      'Failed to read comment to top state from localStorage:',
      error
    );
  }
  return false;
}

export function storeCommentToTop(toTop) {
  try {
    localStorage.setItem(COMMENT_TO_TOP_KEY, toTop ? 'true' : 'false');
  } catch (error) {
    console.error(
      'Failed to store comment to top state to localStorage:',
      error
    );
  }
}
