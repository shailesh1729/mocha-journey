// test/data.test.js
import { expect } from 'chai';
import { fetchData } from '../src/data.js';

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