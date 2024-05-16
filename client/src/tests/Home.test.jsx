import { render, screen } from '@testing-library/react'
import Home from '../pages/Home';

test("renders Home component", () => {
    render(<Home />);
    const titleElement = screen.getByText(/ACTUALIDAD/i);
    expect(titleElement).toBeInTheDocument();
})