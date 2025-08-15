from typing import Dict, Any

_traveller_preferences: Dict[str, Any] = {}

def set_traveller_preferences(data: Dict[str, Any]) -> None:
    """
    Example fields:
    {
      "full_name": "Alex Example",
      "email": "alex@example.com",
      "seat_preference": "aisle",
      "meal_pref": "veg",
      "frequent_flyer": "QF123456",
      "hotel_style": "business",
      "avoid_times": "no red-eyes",
      "special_requirements": "wheelchair access"
    }
    """
    global _traveller_preferences
    _traveller_preferences = data or {}

def get_traveller_preferences() -> Dict[str, Any]:
    return _traveller_preferences or {}
