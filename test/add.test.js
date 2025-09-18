// test/add.test.js
import { assert } from 'chai';
import { add } from '../src/add.js';

describe('The add() function', () => {
  it('should add two numbers correctly', () => {
    assert.equal(add(2, 3), 5);
    assert.equal(add(10, 5), 15);
  });
});