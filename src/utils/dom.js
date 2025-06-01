export function locateAnyCommentNode() {
  return document.querySelector('div[id^="comment-"][id$="-container"]');
}

export function findCommentsWrapper() {
  const anyComment = locateAnyCommentNode();
  if (!anyComment) return null;
  let wrapper = anyComment.parentElement;
  if (!wrapper) return null;
  wrapper = wrapper.parentElement;
  if (!wrapper) return null;
  wrapper = wrapper.parentElement;
  if (!wrapper) return null;
  return wrapper;
}

export function getCommentBlocks(wrapper) {
  const children = Array.from(wrapper.children);
  return children.filter(
    child =>
      child.querySelector &&
      child.querySelector('div[id^="comment-"][id$="-container"]')
  );
}

export function sortCommentBlocks(wrapper, order) {
  const blocks = getCommentBlocks(wrapper);
  if (blocks.length <= 1) return;
  const isReversed = wrapper.dataset.reversed === 'true';
  if (order === 'desc' && !isReversed) {
    blocks.reverse().forEach(blk => wrapper.appendChild(blk));
    wrapper.dataset.reversed = 'true';
  } else if (order === 'asc' && isReversed) {
    blocks.reverse().forEach(blk => wrapper.appendChild(blk));
    delete wrapper.dataset.reversed;
  }
}
