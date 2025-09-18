// src/data.js
export const fetchData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: 1, name: 'Test User' });
    }, 100);
  });
};
