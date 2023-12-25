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


test("the anchor tags point to the right spots", () => {
    render(<TopNav />);
    
    const open_gym_link = screen.getByRole('link', { name: 'Open Gym' });
    expect(open_gym_link).toHaveAttribute('href', '#service-open-gym')
    
    const group_classes_link = screen.getByRole('link', { name: 'Group Classes' });
    expect(group_classes_link).toHaveAttribute('href', '#service-group-classes')
    
    const personal_training_link = screen.getByRole('link', { name: 'Personal Training' });
    expect(personal_training_link).toHaveAttribute('href', '#service-personal-training')
    
    const rehab_only_link = screen.getByRole('link', { name: 'Rehab Only' })
    expect(rehab_only_link).toHaveAttribute('href', '#service-rehab-only')
    
    const contact_us_link = screen.getByRole('link', { name: 'Contact Us' });
    expect(contact_us_link).toHaveAttribute('href', '#contact-us-form')
})