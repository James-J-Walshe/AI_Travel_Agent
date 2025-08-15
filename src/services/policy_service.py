from typing import List, Dict, Any
from .company_service import get_company_policy
from .traveller_service import get_traveller_preferences
from ..utils.travel_api_client import search_travel_options

def _flight_class_allowed(option: Dict[str, Any], policy: Dict[str, Any]) -> bool:
    allowed = [c.upper() for c in policy.get("allowed_classes", ["ECONOMY","PREMIUM_ECONOMY"])]
    return option.get("flight_class", "ECONOMY").upper() in allowed

def _hotel_rate_ok(option: Dict[str, Any], policy: Dict[str, Any]) -> bool:
    nightly = option.get("hotel_nightly_rate", 0)
    limit = policy.get("hotel_max_nightly_rate", 10**9)
    return nightly <= float(limit)

def _score(option: Dict[str, Any], policy: Dict[str, Any]) -> float:
    score = 1000.0
    score -= option.get("price", 0) * 0.1
    if policy.get("preferred_airlines"):
        if option.get("airline") in policy["preferred_airlines"]:
            score += 20
    score -= option.get("duration_minutes", 0) * 0.05
    return round(score, 2)

def search_matching_options() -> List[Dict[str, Any]]:
    policy = get_company_policy()
    traveller = get_traveller_preferences()

    all_options = search_travel_options(traveller)

    filtered = []
    for opt in all_options:
        if policy.get("budget") is not None and float(opt.get("price", 0)) > float(policy["budget"]):
            continue
        if not _flight_class_allowed(opt, policy):
            continue
        if not _hotel_rate_ok(opt, policy):
            continue
        opt = dict(opt)  # copy
        opt["score"] = _score(opt, policy)
        filtered.append(opt)

    filtered.sort(key=lambda x: x["score"], reverse=True)
    return filtered[:10]
