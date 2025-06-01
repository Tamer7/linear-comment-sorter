export function waitForElement(getterFn, timeout = 15000) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    function check() {
      const result = getterFn();
      if (result) return resolve(result);
      if (Date.now() - start > timeout) return reject(new Error('Timed out'));
      requestAnimationFrame(check);
    }
    check();
  });
}
