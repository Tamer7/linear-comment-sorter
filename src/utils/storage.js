const SORT_KEY = 'linearSortOrder';
const HIDE_KEY = 'linearHideEvents';

export function readUserSortOrder() {
  try {
    const val = localStorage.getItem(SORT_KEY);
    if (val === 'asc' || val === 'desc') return val;
  } catch {
    // Ignore localStorage errors - fallback to default
  }
  return 'asc';
}

export function storeUserSortOrder(order) {
  try {
    localStorage.setItem(SORT_KEY, order);
  } catch {
    // Ignore localStorage errors - graceful degradation
  }
}

export function readHideEvents() {
  try {
    const val = localStorage.getItem(HIDE_KEY);
    if (val === 'true') return true;
    if (val === 'false') return false;
  } catch {
    // Ignore localStorage errors - fallback to default
  }
  return false;
}

export function storeHideEvents(hide) {
  try {
    localStorage.setItem(HIDE_KEY, hide ? 'true' : 'false');
  } catch {
    // Ignore localStorage errors - graceful degradation
  }
}
