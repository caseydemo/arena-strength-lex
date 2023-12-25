import { render, screen } from '@testing-library/react';
import Services from '../app/components/Services';

describe('Services', () => {

    describe('headings', () => {
        beforeEach(() => {
            render(<Services />)
            // const {debug} = render(<Services />)
            // debug()
        })

        test('Open Gym', () => {
            const open_gym_heading_text = "Open Gym"
            const open_gym_heading = screen.getByRole('heading', {
                name: open_gym_heading_text,
                level: 2
            });
            expect(open_gym_heading).toBeInTheDocument()
        })

        test('Personal Training', () => {
            const personal_training_text = "Personal Training"
            const personal_training_heading = screen.getByRole('heading', {
                name: personal_training_text,
                level: 2
            })
            expect(personal_training_heading).toBeInTheDocument()
        })

        test('Group Classes', () => {
            const group_classes_text = "Group Classes"
            const group_classes_heading = screen.getByRole('heading', {
                name: group_classes_text,
                level: 2
            })
            expect(group_classes_heading).toBeInTheDocument()
        })

        test('Rehab Only', () => {
            const rehab_only_text = "Rehab Only"
            const rehab_only_heading = screen.getByRole('heading', {
                name: rehab_only_text,
                level: 2
            })
            expect(rehab_only_heading).toBeInTheDocument()
        })
    })
})