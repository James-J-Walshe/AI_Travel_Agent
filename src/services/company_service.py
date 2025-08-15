from typing import Dict, Any

_company_policy: Dict[str, Any] = {}

def set_company_policy(data: Dict[str, Any]) -> None:
    """
    Example fields:
    {
      "name": "Default Policy",
      "budget": 600,  # max total price allowed
      "allowed_classes": ["ECONOMY", "PREMIUM_ECONOMY"],
      "preferred_airlines": ["QF","VA"],
      "hotel_max_nightly_rate": 300,
      "approvals_required": True
    }
    """
    global _company_policy
    _company_policy = data or {}

def get_company_policy() -> Dict[str, Any]:
    return _company_policy or {}
