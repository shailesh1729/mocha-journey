// src/data.js
export const fetchData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: 1, name: 'Test User' });
    }, 100);
  });
};


export const fetchData2 = (shouldFail = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Network error: Request failed.'));
      } else {
        resolve({ id: 1, name: 'Test User' });
      }
    }, 100);
  });
};

