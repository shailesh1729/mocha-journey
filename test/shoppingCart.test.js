import { expect } from 'chai';
import { ShoppingCart } from '../src/shoppingCart.js';

describe('Shopping Cart', () => {

  it('should allow a user to add an item to the cart', () => {
    // GIVEN: A new, empty shopping cart
    const cart = new ShoppingCart();
    const item = { name: 'Laptop', price: 1200 };

    // WHEN: A user adds an item to the cart
    cart.addItem(item);

    // THEN: The cart should contain the new item, and the item count should be 1
    expect(cart.items).to.have.lengthOf(1);
    expect(cart.items[0].name).to.equal('Laptop');
  });

});