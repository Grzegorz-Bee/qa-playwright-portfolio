import pytest
import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../..')))

from src.api.index import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_contact_success(client):
    """Test successful submission of the contact form."""
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
    """Test submission with missing required fields."""
    data = {
        "name": "John Doe"
    }
    response = client.post('/api/contact', json=data)
    assert response.status_code == 400
    json_data = response.get_json()
    assert json_data['error'] == "Missing required fields"

def test_contact_invalid_json(client):
    """Test submission with invalid or missing JSON."""
    response = client.post('/api/contact', data="not a json", content_type='application/json')
    assert response.status_code == 400
    json_data = response.get_json()
    assert json_data['error'] == "Invalid or missing JSON"

def test_contact_no_data(client):
    """Test submission with no data at all."""
    response = client.post('/api/contact')
    assert response.status_code == 400
    json_data = response.get_json()
    assert json_data['error'] == "Invalid or missing JSON"
