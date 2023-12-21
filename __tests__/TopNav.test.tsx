import { render, screen } from '@testing-library/react';
import TopNav from '../app/components/TopNav';


it('renders TopNav component', () => {
    render(<TopNav />); // ARRANGE
    const linkElement = screen.getByText(/Open Gym/i); // ACT
    expect(linkElement).toBeInTheDocument(); // ASSERT
});