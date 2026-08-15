const { quoteCheckout } = require('../src/checkout');

describe('quoteCheckout', () => {
  test('quotes a senior cart', () => {
    const quote = quoteCheckout({
      itemPrices: [10, 20],
      customerAge: 70,
    });

    expect(quote.subtotal).toBe(30);
    expect(quote.senior).toBe(true);
    expect(quote.discount).toBeGreaterThan(0);
  });
});
