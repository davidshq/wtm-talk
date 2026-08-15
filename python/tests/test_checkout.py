"""Checkout quote tests.

Intentionally senior-only: a non-senior case is the live kill during the talk.
"""

from checkout import quote_checkout


def test_quotes_a_senior_cart():
    quote = quote_checkout({"item_prices": [10, 20], "customer_age": 70})

    assert quote["subtotal"] == 30
    assert quote["senior"] is True
    assert quote["discount"] > 0
