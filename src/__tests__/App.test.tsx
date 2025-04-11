import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  test('renders Vite + React heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Vite \+ React/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('increments count when button is clicked', () => {
    render(<App />);
    const button = screen.getByText(/count is 0/i);
    
    fireEvent.click(button);
    
    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
  });

  test('renders Vite and React logos', () => {
    render(<App />);
    const viteLogo = screen.getByAltText(/Vite logo/i);
    const reactLogo = screen.getByAltText(/React logo/i);
    
    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });
});
