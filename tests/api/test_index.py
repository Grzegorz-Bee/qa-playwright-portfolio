import pytest

from src.api.index import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client


@pytest.fixture(autouse=True)
def email_env(monkeypatch):
    monkeypatch.setenv('RESEND_API_KEY', 'test-resend-key')
    monkeypatch.setenv('CONTACT_RECIPIENT_EMAIL', 'owner@example.com')
    monkeypatch.setenv('CONTACT_SENDER_EMAIL', 'Portfolio Contact <onboarding@resend.dev>')


def test_contact_success(client, monkeypatch):
    def fake_send_contact_email(name, email, message):
        return {"id": "email_123", "name": name, "email": email, "message": message}

    monkeypatch.setattr('src.api.index.send_contact_email', fake_send_contact_email)

    data = {
        "name": "John Doe",
        "email": "john@example.com",
        "message": "Hello, this is a test message."
    }
    response = client.post('/api/contact', json=data)
    assert response.status_code == 200
    json_data = response.get_json()
    assert json_data['message'] == "Success! Your message has been received."

def test_contact_missing_fields(client):
    data = {
        "name": "John Doe"
    }
    response = client.post('/api/contact', json=data)
    assert response.status_code == 400
    json_data = response.get_json()
    assert json_data['error'] == "Missing required fields"


def test_contact_email_provider_failure(client, monkeypatch):
    def fake_send_contact_email(name, email, message):
        raise RuntimeError('Email delivery failed')

    monkeypatch.setattr('src.api.index.send_contact_email', fake_send_contact_email)

    response = client.post('/api/contact', json={
        "name": "John Doe",
        "email": "john@example.com",
        "message": "Hello"
    })

    assert response.status_code == 500
    json_data = response.get_json()
    assert json_data['error'] == 'Email delivery failed'


def test_contact_missing_email_configuration(client, monkeypatch):
    monkeypatch.delenv('RESEND_API_KEY', raising=False)
    monkeypatch.setattr('src.api.index.send_contact_email', lambda *args, **kwargs: (_ for _ in ()).throw(RuntimeError('Email delivery is not configured')))

    response = client.post('/api/contact', json={
        "name": "John Doe",
        "email": "john@example.com",
        "message": "Hello"
    })

    assert response.status_code == 500
    json_data = response.get_json()
    assert json_data['error'] == 'Email delivery is not configured'

def test_contact_invalid_json(client):
    response = client.post('/api/contact', data="not a json", content_type='application/json')
    assert response.status_code == 400
    json_data = response.get_json()
    assert json_data['error'] == "Invalid or missing JSON"

def test_contact_no_data(client):
    response = client.post('/api/contact')
    assert response.status_code == 400
    json_data = response.get_json()
    assert json_data['error'] == "Invalid or missing JSON"
