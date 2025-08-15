from flask import Flask, request, jsonify
from .config import PORT

# Direct imports from each service file
from .services.company_service import set_company_policy, get_company_policy
from .services.traveller_service import set_traveller_preferences, get_traveller_preferences
from .services.policy_service import search_matching_options
from .services.booking_service import book_trip  # <-- this replaces the old booking_service import

app = Flask(__name__)

@app.route("/", methods=["GET"])
def health():
    return jsonify({"status": "ok", "service": "ai-travel-booking-agent"})

@app.route("/company", methods=["POST"])
def company():
    data = request.get_json(force=True, silent=False) or {}
    set_company_policy(data)
    return jsonify({
        "message": "Company policy saved.",
        "policy": get_company_policy()
    })

@app.route("/traveller", methods=["POST"])
def traveller():
    data = request.get_json(force=True, silent=False) or {}
    set_traveller_preferences(data)
    return jsonify({
        "message": "Traveller preferences saved.",
        "traveller": get_traveller_preferences()
    })

@app.route("/search", methods=["GET"])
def search():
    results = search_matching_options()
    return jsonify({"count": len(results), "results": results})

@app.route("/book", methods=["POST"])
def book():
    payload = request.get_json(force=True, silent=False) or {}
    confirmation = book_trip(payload)
    return jsonify({
        "message": "Booking confirmed",
        "details": confirmation
    })

if __name__ == "__main__":
    app.run(debug=True, port=PORT)
