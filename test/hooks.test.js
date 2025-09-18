import { expect } from 'chai';

describe('Lifecycle Hooks in Action', () => {
  let counter = 0;

  before(() => {
    console.log('Running `before` hook: this runs once.');
  });

  beforeEach(() => {
    counter = 1;
    console.log('Running `beforeEach` hook: this runs before each test. Counter is now ' + counter);
  });

  afterEach(() => {
    console.log('Running `afterEach` hook: this runs after each test.');
  });

  after(() => {
    console.log('Running `after` hook: this runs once, at the very end.');
  });

  it('should increment the counter from 1 to 2', () => {
    counter++;
    console.log('Running first `it` block. Counter is ' + counter);
    expect(counter).to.equal(2);
  });

  it('should increment the counter from 1 to 2 again', () => {
    counter++;
    console.log('Running second `it` block. Counter is ' + counter);
    expect(counter).to.equal(2);
  });
});
