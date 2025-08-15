from typing import Dict, Any

def book_trip(booking_data: Dict[str, Any]) -> Dict[str, Any]:
    """
    booking_data example:
    { "option_id": 2, "notes": "please add seat selection" }
    """
    option_id = booking_data.get("option_id")
    return {
        "booking_id": f"BK-{option_id or 'NA'}-DEMO",
        "flight_pnr": f"PNR-{option_id or 'NA'}",
        "hotel_conf": f"HTL-{option_id or 'NA'}",
        "status": "confirmed"
    }
