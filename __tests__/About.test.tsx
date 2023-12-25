import { render, screen } from '@testing-library/react';
import About from '../app/components/About';

describe('About', () => {
    describe('headings', () => {
        
        beforeEach(() => {
            render(<About />)
            // const {debug} = render(<About />)
            // debug()
        })
        
        test('Dr. Arena', () => {
            const arena_text = "Dr. Bryon Arena"
            const arena_heading = screen.getByRole('heading', {
                name: arena_text,
                level: 2
            })
        })

        // Dr. Bryon Arena
        // test('Dr. Arena')

        // Isaac Gard
    })
})
