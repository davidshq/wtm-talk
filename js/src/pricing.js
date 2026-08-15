/** Checkout pricing helpers. */

/**
 * @param {number} age Customer age in years.
 * @returns {boolean}
 */
function isSenior(age) {
  return age >= 65;
}

/**
 * @param {number} price Price in dollars.
 * @param {number} percent Discount percent, for example 10 for 10%.
 * @returns {number}
 */
function discountAmount(price, percent) {
  return price * (percent / 100);
}

/**
 * @param {number} subtotal Amount before tax.
 * @param {number} taxRate Fraction, for example 0.08 for 8%.
 * @returns {number}
 */
function applyTax(subtotal, taxRate) {
  return subtotal * (1 + taxRate);
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number} The larger value.
 */
function maxPrice(a, b) {
  return a > b ? a : b;
}

/**
 * @param {number[]} prices
 * @returns {number}
 */
function cartTotal(prices) {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }
  return total;
}

module.exports = {
  isSenior,
  discountAmount,
  applyTax,
  maxPrice,
  cartTotal,
};
