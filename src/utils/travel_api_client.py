from typing import List, Dict, Any

def search_travel_options(traveller: Dict[str, Any]) -> List[Dict[str, Any]]:
    """
    Mock provider — returns deterministic sample options.
    Replace with real API calls (Amadeus/Duffel/etc.) later.
    """
    # You can factor traveller preferences into results if desired
    base = [
        {
            "id": 1, "origin": "BNE", "destination": "SYD",
            "airline": "QF", "flight_class": "ECONOMY",
            "duration_minutes": 95, "price": 480.0,
            "hotel_name": "Business Inn", "hotel_style": "business",
            "hotel_nightly_rate": 220.0, "nights": 2
        },
        {
            "id": 2, "origin": "BNE", "destination": "MEL",
            "airline": "VA", "flight_class": "PREMIUM_ECONOMY",
            "duration_minutes": 130, "price": 590.0,
            "hotel_name": "Chain Comfort", "hotel_style": "chain",
            "hotel_nightly_rate": 180.0, "nights": 2
        },
        {
            "id": 3, "origin": "BNE", "destination": "ADL",
            "airline": "NZ", "flight_class": "ECONOMY",
            "duration_minutes": 150, "price": 350.0,
            "hotel_name": "Boutique Square", "hotel_style": "boutique",
            "hotel_nightly_rate": 260.0, "nights": 2
        },
    ]
    # Optionally tweak based on traveller (e.g., hotel_style)
    desired = (traveller or {}).get("hotel_style")
    if desired:
        for o in base:
            if o.get("hotel_style") == desired:
                o["price"] = max(0.0, o["price"] - 20.0)  # tiny nudge
    return base
