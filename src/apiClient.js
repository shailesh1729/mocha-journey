export class ApiClient {
  saveUser(user) {
    // In the real world, this would make an API call
    return Promise.resolve({ ...user, id: 1 });
  }
}
