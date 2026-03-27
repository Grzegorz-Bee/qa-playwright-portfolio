from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # Enable CORS for all routes

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json(silent=True)
    
    if data is None:
        return jsonify({"error": "Invalid or missing JSON"}), 400
    
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    # Basic validation
    if not name or not email or not message:
        return jsonify({"error": "Missing required fields"}), 400

    # Mock success response
    return jsonify({
        "message": "Message received successfully!",
        "receivedData": {"name": name, "email": email}
    }), 200

    # Vercel requires a handler or a Flask app object
if __name__ == "__main__":
    app.run(port=3001)
