import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Hero from '../app/components/Hero';

describe('Hero', () => {
    // Arena Strength &amp; Performance
    test('H1 contains correct title', () => {
        render(<Hero />)
        const h1_text = "Arena Strength & Performance";
        const h1_element = screen.getByRole('heading', {
            name: h1_text,
            level: 1
        });
        expect(h1_element).toBeInTheDocument();

        // const {debug} = render(<Hero />)
        // debug()
    })

    test('background image has correct src', () => {
        // https://testing-library.com/docs/queries/bytestid/
        render(<Hero/>)
        const elem = screen.getByTestId('background')
        expect(elem).toHaveStyle('background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),url("/rack_1.JPG")')
    })
})