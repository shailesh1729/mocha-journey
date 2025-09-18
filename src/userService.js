export const registerUser = (user, emailSender) => {
    // Other registration logic...
    if (user.email) {
        emailSender(user.email, 'Welcome!', 'Thank you for registering.');
    }
};

export const getUsers = async (fetchUsers) => {
  const users = await fetchUsers();
  return users.map(user => user.name);
};


export const saveUserData = async (apiClient, user) => {
  const result = await apiClient.saveUser(user);
  return result;
};

