import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders reset link', () => {
    render(<App />);
    const linkElement = screen.getByText(/reset/i);
    expect(linkElement).toBeInTheDocument();
});