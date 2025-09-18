// test/userService.test.js
import { expect } from 'chai';
import sinon from 'sinon';
import { fetchUsers } from '../src/api.js'; // We import the real function to use it in a real-world call
import { registerUser, getUsers } from '../src/userService.js';
import { saveUserData } from '../src/userService.js';
import { ApiClient } from '../src/apiClient.js';


describe('User Registration', () => {
    let emailSenderSpy;

    beforeEach(() => {
        // We create a new spy for each test to ensure a clean slate.
        emailSenderSpy = sinon.spy();
    });

    it('should send a welcome email to the new user', () => {
        const newUser = { email: 'test@example.com' };
        // We pass our spy directly to the function we are testing.
        registerUser(newUser, emailSenderSpy);

        expect(emailSenderSpy.calledOnce).to.be.true;
        expect(emailSenderSpy.calledWith('test@example.com', 'Welcome!', 'Thank you for registering.')).to.be.true;
    });

    it('should NOT send an email if the user has no email address', () => {
        const newUser = { email: null };
        // We pass our spy directly to the function we are testing.
        registerUser(newUser, emailSenderSpy);

        expect(emailSenderSpy.notCalled).to.be.true;
    });
});

describe('User Service', () => {
  let fetchUsersStub;

  beforeEach(() => {
    // We create a new stub for each test to control the return value
    fetchUsersStub = sinon.stub();
  });

  it('should return a list of user names', async () => {
    // We program the stub to return a specific fake value
    fetchUsersStub.returns(Promise.resolve([
      { id: 1, name: 'Jane Doe' },
      { id: 2, name: 'Richard Roe' }
    ]));

    // We pass our stub directly to the function we are testing
    const userNames = await getUsers(fetchUsersStub);

    // We assert that the function returns the names from our fake data
    expect(userNames).to.deep.equal(['Jane Doe', 'Richard Roe']);
  });

  it('should handle an API error gracefully', async () => {
    // We program the stub to throw an error
    fetchUsersStub.throws(new Error('Network error'));

    try {
      // We pass our stub directly to the function we are testing
      await getUsers(fetchUsersStub);
      // If the function doesn't throw, we fail the test
      expect.fail('Expected getUsers to throw an error');
    } catch (error) {
      // We assert that the function correctly propagated the error
      expect(error.message).to.equal('Network error');
    }
  });
});


describe('User Service with Mocks', () => {

  it('should call saveUser on the API client with the correct data', async () => {
    // 1. Create the mock object from an instance of the class
    const apiClientMock = sinon.mock(new ApiClient());
    
    // 2. Set expectations on the mock
    const newUser = { name: 'Alice', email: 'alice@example.com' };
    apiClientMock
      .expects('saveUser') // Expect a call to the 'saveUser' method
      .withExactArgs(newUser) // It must be called with exactly these arguments
      .once() // It must be called exactly once
      .returns(Promise.resolve({ ...newUser, id: 1 })); // Program the behavior
      
    // 3. Call the function we are testing
    const result = await saveUserData(apiClientMock.object, newUser);
    
    // 4. Verify that all expectations were met
    apiClientMock.verify();
    
    // 5. Assert on the result of the function
    expect(result.id).to.equal(1);
    
    // Note: The mock automatically restores itself after the test completes.
  });
});