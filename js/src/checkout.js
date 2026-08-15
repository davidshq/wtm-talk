/** Turns a cart and customer age into a checkout quote. */
const { isSenior, discountAmount, cartTotal } = require('./pricing');

const SENIOR_DISCOUNT_PERCENT = 10;

/**
 * @param {{ itemPrices: number[], customerAge: number }} input
 */
function quoteCheckout(input) {
  const { itemPrices, customerAge } = input;

  const subtotal = cartTotal(itemPrices);
  const senior = isSenior(customerAge);
  const discount = senior ? discountAmount(subtotal, SENIOR_DISCOUNT_PERCENT) : 0;

  return { senior, subtotal, discount, total: subtotal - discount };
}

module.exports = {
  quoteCheckout,
};
