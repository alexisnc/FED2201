import { render, screen } from '@testing-library/react';
// import App from './App';
import App from './components/week15/App'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(`Show`);
  expect(linkElement).toBeInTheDocument();
});