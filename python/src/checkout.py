"""Turns a cart and customer age into a checkout quote."""

from pricing import cart_total, discount_amount, is_senior

SENIOR_DISCOUNT_PERCENT = 10


def quote_checkout(input: dict) -> dict:
    """Return senior flag, subtotal, discount, and total after discount."""
    item_prices = input["item_prices"]
    customer_age = input["customer_age"]

    subtotal = cart_total(item_prices)
    senior = is_senior(customer_age)
    discount = (
        discount_amount(subtotal, SENIOR_DISCOUNT_PERCENT) if senior else 0
    )

    return {
        "senior": senior,
        "subtotal": subtotal,
        "discount": discount,
        "total": subtotal - discount,
    }
