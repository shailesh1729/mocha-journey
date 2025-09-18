export const fetchUsers = () => {
  // In the real world, this would be a network call
  return Promise.resolve([
    { id: 1, name: 'John Doe' }
  ]);
};

