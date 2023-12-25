import { render, screen } from '@testing-library/react';
import Services from '../app/components/Services';
import { ServiceItemProps } from '@/app/types';
const default_width = 500;
const default_height = 500;
const services: ServiceItemProps[] = [
    {
        title: "Open Gym",
        id: "open-gym",
        image: {
            src: "open_gym_2.png",
            width: default_width,
            height: default_height,
            alt: "open gym image",
        },
        text: "Enjoy our facility with premium specialty fitness equipment which includes: strongman, powerlifting, crossfit, body building and functional movement amenities. All equipment is open for use to our members within hours of operation.",
    },
    {
        title: "Personal Training",
        id: "personal-training",
        image: {
            src: "bench_spot_1.png",
            width: default_width,
            height: default_height,
            alt: "personal training image",
        },
        text: "Work one on one with our qualified trainers and staff to reach your fitness goals based on what you need. Sessions are 1 hour long and geared towards your needs and capability.",
    },
    {
        title: "Group Classes",
        id: "group-classes",
        image: {
            src: "bench_spot_1.png",
            width: default_width,
            height: default_height,
            alt: "group classes image",
        },
        text: "Small group training that is limited to 6 participants at a time allowing more individualized attention and coaching. Classes are focused on building functional strength with compound and unilateral exercises with conditioning at the end. These are designed for all levels of fitness and capability.",
    },
    {
        title: "Rehab Only",
        id: "rehab-only",
        image: {
            src: "rehab_1.jpg",
            width: 366,
            height: 244,
            alt: "rehab only image",
        },
        text: "Work one on one with a member of our staff for 30 minutes per session. These sessions are centered around movement optimization and rehabilitating injuries or chronic muscular pain.",
    },
];

describe('Services', () => {
    
    
    test('Open Gym Service heading is in document', () => {
        render(<Services />)
        const open_gym_heading_text = "Open Gym"
        const open_gym_heading = screen.getByRole('heading', {
            name: open_gym_heading_text,
            level: 2
        });
        expect(open_gym_heading).toBeInTheDocument()
    })

    test('Personal Training Service heading is in document', () => {
        render(<Services />)
        const personal_training_text = "Personal Training"
        const personal_training_heading = screen.getByRole('heading', {
            name: personal_training_text,
            level: 2
        })
        expect(personal_training_heading).toBeInTheDocument()
    })

})