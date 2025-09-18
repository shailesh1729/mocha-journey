import { expect } from 'chai';
import { reverseString } from '../src/stringProcessor.js';

describe('String Processor', () => {

  it('should reverse a string correctly', () => {
    const reversed = reverseString('hello');
    expect(reversed).to.equal('olleh');
  });

  it('should throw an error if the input is not a string', () => {
    // We wrap the code that we expect to throw an error inside a function
    const badFunctionCall = () => reverseString(123);
    
    // Then we use the `.to.throw()` assertion
    expect(badFunctionCall).to.throw('Input must be a string!');
  });
});