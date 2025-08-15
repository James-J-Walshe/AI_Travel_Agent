from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/company', methods=['POST'])
def company_input():
    data = request.json
    # Store company policy (placeholder)
    return jsonify({"message": "Company policy stored", "data": data})

@app.route('/traveller', methods=['POST'])
def traveller_input():
    data = request.json
    # Store traveller preferences (placeholder)
    return jsonify({"message": "Traveller preferences stored", "data": data})

@app.route('/search', methods=['GET'])
def search_travel():
    # Placeholder for AI + API search
    return jsonify({"message": "Search results placeholder"})

if __name__ == '__main__':
    app.run(debug=True)
