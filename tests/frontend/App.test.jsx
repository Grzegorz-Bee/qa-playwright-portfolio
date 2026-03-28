import { render, screen } from '@testing-library/react';
import App from '../../src/App';
import React from 'react';

describe('App Component', () => {
  it('renders updated framework and API testing tools', () => {
    render(<App />);

    const expectedSkills = [
      'Cypress',
      'JUnit',
      'Gatling',
      'Android (Kotlin)',
      'iOS (Swift)',
      'Postman',
      'RestAssured',
      'Proxyman',
    ];

    for (const skill of expectedSkills) {
      expect(screen.getByText(skill)).toBeInTheDocument();
    }
  });

  it('renders the portfolio title', () => {
    render(<App />);
    expect(screen.getByTestId('portfolio-name')).toHaveTextContent('QA Automation Portfolio');
  });

  it('renders the tech stack section', () => {
    render(<App />);
    expect(screen.getByTestId('tech-stack-grid')).toBeInTheDocument();
  });

  it('renders the about section', () => {
    render(<App />);
    expect(screen.getByTestId('about-section')).toBeInTheDocument();
  });
});
