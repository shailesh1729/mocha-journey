import { assert, expect, should } from 'chai';
import { ShoppingCart } from '../src/shoppingCart.js';

// We must call the should() function to enable the should style
should();

describe('Chai Assertion Styles Comparison', () => {

  it('should test an item count using all three styles', () => {
    // Set up a cart with one item
    const cart = new ShoppingCart();
    cart.addItem({ name: 'Book' });
    const count = cart.items.length;

    // 1. Assert Style (Traditional)
    assert.equal(count, 1, 'Item count should be 1');

    // 2. Expect Style (BDD-friendly)
    expect(count).to.equal(1);

    // 3. Should Style (BDD-friendly)
    count.should.equal(1);
  });
});