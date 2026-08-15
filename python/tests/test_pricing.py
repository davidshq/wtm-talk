"""Unit tests for the pricing helpers."""

from pricing import apply_tax, cart_total, discount_amount, is_senior, max_price


def test_is_senior_returns_true_for_a_clearly_senior_customer():
    # Weak: no boundary, no false case. `>=` → `>` and `65` → `66` survive.
    assert is_senior(70) is True


def test_discount_amount_returns_a_positive_number():
    # Weak: many wrong formulas still return a positive number.
    assert discount_amount(100, 10) > 0


def test_apply_tax_adds_the_tax_rate_to_the_subtotal():
    # Strong: an exact value kills arithmetic mutants.
    assert apply_tax(200, 0.5) == 300


def test_max_price_returns_the_larger_of_two_prices():
    # Thorough — and still cannot kill `>` → `>=` (equivalent mutant).
    assert max_price(10, 20) == 20
    assert max_price(20, 10) == 20
    assert max_price(15, 15) == 15


def test_cart_total_sums_all_item_prices():
    # Strong: exact sums kill `+=` → `-=` and `total = 0` → `None`.
    assert cart_total([10, 20, 30]) == 60
    assert cart_total([]) == 0
