import json
import os
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen
from flask import Flask, jsonify, request
from flask_cors import CORS


def send_contact_email(name, email, message):
    resend_api_key = os.environ.get('RESEND_API_KEY')
    recipient_email = os.environ.get('CONTACT_RECIPIENT_EMAIL')
    sender_email = os.environ.get('CONTACT_SENDER_EMAIL', 'Portfolio Contact <onboarding@resend.dev>')

    if not resend_api_key or not recipient_email:
        raise RuntimeError('Email delivery is not configured')

    payload = {
        'from': sender_email,
        'to': [recipient_email],
        'reply_to': email,
        'subject': f'Portfolio contact from {name}',
        'text': f'Name: {name}\nEmail: {email}\n\nMessage:\n{message}',
    }

    req = Request(
        'https://api.resend.com/emails',
        data=json.dumps(payload).encode('utf-8'),
        headers={
            'Authorization': f'Bearer {resend_api_key}',
            'Content-Type': 'application/json',
        },
        method='POST',
    )

    try:
        with urlopen(req, timeout=10) as response:
            response_body = response.read().decode('utf-8')
            return json.loads(response_body) if response_body else {}
    except HTTPError as exc:
        details = exc.read().decode('utf-8')
        raise RuntimeError(details or 'Email delivery failed') from exc
    except URLError as exc:
        raise RuntimeError('Unable to reach the email delivery service') from exc


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