from flask import Flask, request, jsonify
from src.config import PORT
from .services import company_service
from .services import traveller_service
from .services import policy_service
from .services import booking_service

app = Flask(__name__)

@app.route("/", methods=["GET"])
def health():
    return jsonify({"status": "ok", "service": "ai-travel-booking-agent"})

@app.route("/company", methods=["POST"])
def company():
    data = request.get_json(force=True, silent=False) or {}
    company_service.set_company_policy(data)
    return jsonify({"message": "Company policy saved.", "policy": company_service.get_company_policy()})

@app.route("/traveller", methods=["POST"])
def traveller():
    data = request.get_json(force=True, silent=False) or {}
    traveller_service.set_traveller_preferences(data)
    return jsonify({"message": "Traveller preferences saved.", "traveller": traveller_service.get_traveller_preferences()})

@app.route("/search", methods=["GET"])
def search():
    results = policy_service.search_matching_options()
    return jsonify({"count": len(results), "results": results})

@app.route("/book", methods=["POST"])
def book():
    payload = request.get_json(force=True, silent=False) or {}
    confirmation = booking_service.book_trip(payload)
    return jsonify({"message": "Booking confirmed", "details": confirmation})

if __name__ == "__main__":
    app.run(debug=True, port=PORT)
