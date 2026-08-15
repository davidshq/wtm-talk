"""Checkout pricing helpers."""


def is_senior(age: int) -> bool:
    """Return True when the customer is 65 or older."""
    return age >= 65


def discount_amount(price: float, percent: float) -> float:
    """Dollar amount of a percentage discount (10 means 10%)."""
    return price * (percent / 100)


def apply_tax(subtotal: float, tax_rate: float) -> float:
    """Subtotal after a tax rate is applied (0.08 means 8%)."""
    return subtotal * (1 + tax_rate)


def max_price(a: float, b: float) -> float:
    """Return the larger of two prices."""
    return a if a > b else b


def cart_total(prices: list[float]) -> float:
    """Sum of item prices, or 0 for an empty cart."""
    total = 0
    for price in prices:
        total += price
    return total
