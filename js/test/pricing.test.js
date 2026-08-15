const {
  isSenior,
  discountAmount,
  applyTax,
  maxPrice,
  cartTotal,
} = require('../src/pricing');

describe('pricing helpers', () => {
  // Weak: no boundary, no false case. `>=` → `>` and `return true` survive.
  test('isSenior returns true for a clearly senior customer', () => {
    expect(isSenior(70)).toBe(true);
  });

  // Weak: many wrong formulas still return a positive number.
  test('discountAmount returns a positive number', () => {
    expect(discountAmount(100, 10)).toBeGreaterThan(0);
  });

  // Strong: an exact value kills arithmetic mutants.
  test('applyTax adds the tax rate to the subtotal', () => {
    expect(applyTax(200, 0.5)).toBe(300);
  });

  // Thorough — and still cannot kill `>` → `>=` (equivalent mutant).
  test('maxPrice returns the larger of two prices', () => {
    expect(maxPrice(10, 20)).toBe(20);
    expect(maxPrice(20, 10)).toBe(20);
    expect(maxPrice(15, 15)).toBe(15);
  });

  // Strong: exact sums kill off-by-one and `+=` → `-=`.
  test('cartTotal sums all item prices', () => {
    expect(cartTotal([10, 20, 30])).toBe(60);
    expect(cartTotal([])).toBe(0);
  });
});
