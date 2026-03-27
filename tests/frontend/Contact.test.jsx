import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from '../../src/components/Contact';
import React from 'react';

// Mock fetch
global.fetch = vi.fn();

describe('Contact Component', () => {
  it('renders the contact form', () => {
    render(<Contact />);
    expect(screen.getByTestId('contact-name')).toBeInTheDocument();
    expect(screen.getByTestId('contact-email')).toBeInTheDocument();
    expect(screen.getByTestId('contact-message')).toBeInTheDocument();
    expect(screen.getByTestId('contact-submit')).toBeInTheDocument();
  });

  it('updates input values on change', () => {
    render(<Contact />);
    const nameInput = screen.getByTestId('contact-name');
    fireEvent.change(nameInput, { target: { value: 'John Doe', name: 'name' } });
    expect(nameInput.value).toBe('John Doe');
  });

  it('shows success message on successful form submission', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Message sent successfully!' }),
    });

    render(<Contact />);
    
    fireEvent.change(screen.getByTestId('contact-name'), { target: { value: 'John Doe', name: 'name' } });
    fireEvent.change(screen.getByTestId('contact-email'), { target: { value: 'john@example.com', name: 'email' } });
    fireEvent.change(screen.getByTestId('contact-message'), { target: { value: 'Hello', name: 'message' } });
    
    fireEvent.click(screen.getByTestId('contact-submit'));

    await waitFor(() => {
      expect(screen.getByTestId('contact-status-message')).toHaveTextContent('Message sent successfully!');
    });
  });

  it('shows error message on failed form submission', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Submission failed' }),
    });

    render(<Contact />);
    
    fireEvent.change(screen.getByTestId('contact-name'), { target: { value: 'John Doe', name: 'name' } });
    fireEvent.change(screen.getByTestId('contact-email'), { target: { value: 'john@example.com', name: 'email' } });
    fireEvent.change(screen.getByTestId('contact-message'), { target: { value: 'Hello', name: 'message' } });
    
    fireEvent.click(screen.getByTestId('contact-submit'));

    await waitFor(() => {
      expect(screen.getByTestId('contact-status-message')).toHaveTextContent('Submission failed');
    });
  });
});
