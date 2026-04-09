import os
from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

def send_contact_email(name, email, message):
    resend_api_key = os.environ.get('RESEND_API_KEY')
    recipient_email = os.environ.get('CONTACT_RECIPIENT_EMAIL')
    sender_email = os.environ.get(
        'CONTACT_SENDER_EMAIL',
        'Portfolio Contact <onboarding@resend.dev>'
    )

    if not resend_api_key or not recipient_email:
        raise RuntimeError('Email delivery is not configured')

    payload = {
        'from': sender_email,
        'to': [recipient_email],
        'reply_to': email,
        'subject': f'Portfolio contact from {name}',
        'text': f'Name: {name}\nEmail: {email}\n\nMessage:\n{message}',
    }

    response = requests.post(
        "https://api.resend.com/emails",
        headers={
            "Authorization": f"Bearer {resend_api_key}",
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0",  # 👈 important
        },
        json=payload,
        timeout=10,
    )

    if response.status_code >= 400:
        raise RuntimeError(response.text)

    return response.json()


def create_contact_app(route_path):
    app = Flask(__name__)
    CORS(app)

    @app.route(route_path, methods=['POST'])
    def contact():
        data = request.get_json(silent=True)

        if data is None:
            return jsonify({"error": "Invalid or missing JSON"}), 400

        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        if not name or not email or not message:
            return jsonify({"error": "Missing required fields"}), 400

        try:
            send_contact_email(name=name, email=email, message=message)
        except RuntimeError as exc:
            return jsonify({"error": str(exc)}), 500

        return jsonify({
            "message": "Success! Your message has been received."
        }), 200

    return app