/**
 * Prints a sample checkout quote as JSON.
 *
 * Run with `npm start` from this folder.
 */
const { quoteCheckout } = require('./src/checkout');

const quote = quoteCheckout({
  itemPrices: [10, 20, 30],
  customerAge: 70,
});

console.log(JSON.stringify(quote, null, 2));
