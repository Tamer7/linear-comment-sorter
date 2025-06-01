// src/main.js

import { waitForElement } from './utils/poller.js';
import { findCommentsWrapper } from './utils/dom.js';
import { initCommentSorter } from './features/commentSorter.js';
import { initHideEventsToggle } from './features/hideEventsToggle.js';

function observeForSPA() {
  const observer = new MutationObserver(mutations => {
    for (const m of mutations) {
      for (const node of m.addedNodes) {
        if (
          node.nodeType === 1 &&
          node.querySelector &&
          node.querySelector("div[id^='comment-'][id$='-container']")
        ) {
          initCommentSorter();
          initHideEventsToggle();
          return;
        }
      }
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

function init() {
  waitForElement(findCommentsWrapper, 15000)
    .then(() => {
      initCommentSorter();
      initHideEventsToggle();
      observeForSPA();
    })
    .catch(() => {});
}

if (
  document.readyState === 'complete' ||
  document.readyState === 'interactive'
) {
  init();
} else {
  document.addEventListener('DOMContentLoaded', init);
}
