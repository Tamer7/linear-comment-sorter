// src/main.js

import { waitForElement } from './utils/poller.js';
import { findCommentsWrapper } from './utils/dom.js';
import { initCommentSorter } from './features/commentSorter.js';
import { initHideEventsToggle } from './features/hideEventsToggle.js';
import { initCommentFormToTop } from './features/commentFormToTop.js';

function shouldInitialize() {
  return (
    window.location.pathname.includes('/issue/') &&
    !document.querySelector('.linear-controls-wrapper')
  );
}

function initExtension() {
  if (!shouldInitialize()) return;

  waitForElement(findCommentsWrapper, 2000)
    .then(() => {
      initCommentSorter();
      initHideEventsToggle();
      initCommentFormToTop();
    })
    .catch(() => {});
}

function startPolling() {
  initExtension();
  window.setInterval(() => {
    initExtension();
  }, 2000);
}

startPolling();
