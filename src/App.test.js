import { render, screen } from '@testing-library/react';
import App from './App';

test('renders mem battle app', () => {
  render(<App />);
  const titleElement = screen.getByText(/Mem battle/i);
  expect(titleElement).toBeInTheDocument();
});
