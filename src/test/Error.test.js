
import { render, screen } from '@testing-library/react';
import ErrorPage from '../component/ErrorPage';
test('renders Error component', () => {
    render(<ErrorPage />);
    const linkElement = screen.getByText(/404 Not Found/i);
    expect(linkElement).toBeInTheDocument();
  });