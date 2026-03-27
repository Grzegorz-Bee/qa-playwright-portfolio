import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../../src/App';
import React from 'react';

describe('App Component', () => {
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
