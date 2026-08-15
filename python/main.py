"""Print a sample checkout quote as JSON.

Run with ``python main.py`` from this folder.
"""

import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent / "src"))

from checkout import quote_checkout

if __name__ == "__main__":
    print(
        json.dumps(
            quote_checkout(
                {
                    "item_prices": [10, 20, 30],
                    "customer_age": 70,
                }
            ),
            indent=2,
        )
    )
