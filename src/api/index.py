from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json(silent=True)
    
    if data is None:
        return jsonify({"error": "Invalid or missing JSON"}), 400
    
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    if not name or not email or not message:
        return jsonify({"error": "Missing required fields"}), 400

    return jsonify({
        "message": "Message received successfully!",
        "receivedData": {"name": name, "email": email}
    }), 200

if __name__ == "__main__":
    app.run(port=3001)
