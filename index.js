function createDebouncedFetch() {
  let timeoutID;

  return function debouncedFetch(url, delay) {
    return new Promise((resolve, reject) => {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(async () => {
        try {
          const result = await fetch(url);
          if (!result.ok) {
            throw new Error(`Network response is not OK: ${result.status}`);
          }
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }, delay);
    });
  };
}

module.exports = createDebouncedFetch();
