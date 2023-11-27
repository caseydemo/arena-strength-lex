import { ServiceItemProps } from "../types";
import Service from "./ServiceItem";

export default function Services() {
    const default_width = 500;
    const default_height = 500;

    // make a list of services that are of type ServiceItem and contain and image of type ImageData
    // TODO - put this into a db instead of being hardcoded
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

    return (
        /*
      two column layout
      left column: image
      right column: text
    */
        <div className='services'>
            {/* loop through and render each hardcoded service */}
            {/* TODO - put this into a db instead of being hardcoded */}
            {services.map((service, index) => (
                <Service
                    key={index}
                    title={service.title}
                    id={service.id}
                    text={service.text}
                    image={service.image}
                />
            ))}
        </div>
    );
}
