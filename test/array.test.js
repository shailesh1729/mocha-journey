import { expect } from 'chai';

describe('A JavaScript Array', () => {

  it('should be created with a literal', () => {
    const arr = [];
    expect(arr).to.be.an('array').with.lengthOf(0);
  });

  it('should find an element using its index', () => {
    const fruits = ['apple', 'banana', 'cherry'];
    expect(fruits[1]).to.equal('banana');
  });

  it('should check if an element exists using includes()', () => {
    const numbers = [10, 20, 30];
    expect(numbers.includes(20)).to.be.true;
    expect(numbers.includes(5)).to.be.false;
  });

  it('should check if some elements pass a test using some()', () => {
    const numbers = [2, 4, 6, 7];
    // Check if at least one number is odd
    expect(numbers.some(num => num % 2 !== 0)).to.be.true;
    // Check that not all numbers are odd
    expect(numbers.some(num => num % 2 === 0)).to.be.true;
  });

  it('should check if all elements pass a test using every()', () => {
    const numbers = [2, 4, 6, 8];
    // Check if every number is even
    expect(numbers.every(num => num % 2 === 0)).to.be.true;
    // Check if every number is odd (it should fail)
    expect(numbers.every(num => num % 2 !== 0)).to.be.false;
  });

});


////////////////////////////////////////////////////

describe('Array Mutator Methods', () => {
  let numbers;

  // This `beforeEach` hook runs before every test in this block
  beforeEach(() => {
    numbers = [1, 5, 2, 4, 3];
  });

  it('should add an element to the end of the array with push()', () => {
    numbers.push(6);
    expect(numbers).to.have.lengthOf(6);
    expect(numbers[5]).to.equal(6);
  });

  it('should remove the last element with pop() and return it', () => {
    const lastElement = numbers.pop();
    expect(lastElement).to.equal(3);
    expect(numbers).to.have.lengthOf(4);
    expect(numbers).to.deep.equal([1, 5, 2, 4]);
  });
});

////////////////////////////////////////////////////

describe('Array Methods That Modify or Create New Arrays', () => {

  let numbers = [1, 5, 2, 4, 3];

  // We'll use a `beforeEach` hook to ensure a fresh array for each test.
  beforeEach(() => {
    numbers = [1, 5, 2, 4, 3];
  });

  it('should return a portion of the array with slice() without changing the original', () => {
    const slicedArray = numbers.slice(1, 4);
    expect(slicedArray).to.deep.equal([5, 2, 4]);
    // This is the most important part: ensure the original array is untouched
    expect(numbers).to.deep.equal([1, 5, 2, 4, 3]);
  });

  it('should remove elements with splice() and modify the original array', () => {
    const splicedElements = numbers.splice(1, 2);
    expect(splicedElements).to.deep.equal([5, 2]);
    // The original array has been mutated (changed)
    expect(numbers).to.deep.equal([1, 4, 3]);
  });

  it('should sort an array using sort() and modify the original array', () => {
    // Note: sort() on numbers without a custom comparator can be tricky!
    numbers.sort();
    expect(numbers).to.deep.equal([1, 2, 3, 4, 5]);
    // The original array has been mutated
    expect(numbers).to.not.equal([1, 5, 2, 4, 3]);
  });

});

////////////////////////////////////////////////////
describe('Functional Array Methods (map, filter, reduce)', () => {

  const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
  ];

  it('should create a new array with map() without changing the original', () => {
    const names = people.map(person => person.name);
    expect(names).to.deep.equal(['Alice', 'Bob', 'Charlie']);
    // Original array should be untouched
    expect(people).to.have.lengthOf(3);
  });

  it('should create a new, filtered array with filter()', () => {
    const twentySomethings = people.filter(person => person.age === 25);
    expect(twentySomethings).to.deep.equal([
      { name: 'Alice', age: 25 },
      { name: 'Charlie', age: 25 },
    ]);
    expect(people).to.have.lengthOf(3);
  });

  it('should reduce an array to a single value using reduce()', () => {
    const numbers = [1, 2, 3, 4];
    const sum = numbers.reduce((total, num) => total + num, 0);
    expect(sum).to.equal(10);
  });

});

////////////////////////////////////////////////////
import * as R from 'ramda';

describe('Ramda.js', () => {

  it('should combine two arrays using zip()', () => {
    const names = ['Alice', 'Bob', 'Charlie'];
    const ages = [25, 30, 25];
    const zipped = R.zip(names, ages);

    expect(zipped).to.deep.equal([
      ['Alice', 25],
      ['Bob', 30],
      ['Charlie', 25]
    ]);
  });

});



////////////////////////////////////////////////////

////////////////////////////////////////////////////

////////////////////////////////////////////////////

////////////////////////////////////////////////////

