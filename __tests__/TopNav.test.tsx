import { render, screen } from '@testing-library/react';
import TopNav from '../app/components/TopNav';
import { unlink } from 'fs';


it('renders TopNav component', () => {
    render(<TopNav />); // ARRANGE

    // Open Gym
    const open_gym_link = screen.getByText(/Open Gym/); // ACT
    expect(open_gym_link).toBeInTheDocument(); // ASSERT
    
    // Group Classes
    const group_classes_link = screen.getByText(/Group Classes/);
    expect(group_classes_link).toBeInTheDocument();

    // Personal Training
    const personal_training_link = screen.getByText(/Personal Training/);
    expect(personal_training_link).toBeInTheDocument();

    // Rehab Only
    const rehab_only_link = screen.getByText(/Rehab Only/);
    expect(rehab_only_link).toBeInTheDocument();


    // Contact Us
    const contact_us_link = screen.getByText(/Contact Us/);
    expect(contact_us_link).toBeInTheDocument();

});