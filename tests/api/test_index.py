import pytest
import os
from src.api.index import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_contact_success(client):
    data = {
        "name": "John Doe",
        "email": "john@example.com",
        "message": "Hello, this is a test message."
    }
    response = client.post('/api/contact', json=data)
    assert response.status_code == 200
    json_data = response.get_json()
    assert json_data['message'] == "Message received successfully!"
    assert json_data['receivedData']['name'] == "John Doe"
    assert json_data['receivedData']['email'] == "john@example.com"

def test_contact_missing_fields(client):
    data = {
        "name": "John Doe"
    }
    response = client.post('/api/contact', json=data)
    assert response.status_code == 400
    json_data = response.get_json()
    assert json_data['error'] == "Missing required fields"

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
