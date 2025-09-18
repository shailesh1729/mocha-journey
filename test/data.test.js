// test/data.test.js
import { expect } from 'chai';
import { fetchData } from '../src/data.js';
import { fetchData2 } from '../src/data.js';

describe('Asynchronous Data Fetching with Promises', () => {
  it('should fetch data correctly', () => {
    // We return the promise, telling Mocha to wait for it.
    return fetchData().then(data => {
      expect(data).to.be.an('object');
      expect(data.id).to.equal(1);
      expect(data.name).to.equal('Test User');
    });
  });
});

////////////////////////////////////////////////////

describe('Asynchronous Data Fetching with Async/Await', () => {
  it('should fetch data correctly with async/await', async () => {
    // The `await` keyword pauses execution until the promise resolves.
    const data = await fetchData();
    expect(data).to.be.an('object');
    expect(data.id).to.equal(1);
    expect(data.name).to.equal('Test User');
  });
});


describe('Asynchronous Error Handling with Promises', () => {
  it('should handle a network error', () => {
    // We return the promise and use .catch() to test for a rejection.
    return fetchData2(true).catch(error => {
      expect(error).to.be.an('error');
      expect(error.message).to.equal('Network error: Request failed.');
    });
  });
});

describe('Asynchronous Error Handling with Async/Await', () => {
  it('should handle a network error with async/await', async () => {
    try {
      await fetchData2(true);
      // If the above line doesn't throw, we'll fail the test ourselves.
      expect.fail('Expected promise to be rejected, but it was fulfilled.');
    } catch (error) {
      // The `catch` block will run if the promise is rejected.
      expect(error).to.be.an('error');
      expect(error.message).to.equal('Network error: Request failed.');
    }
  });
});