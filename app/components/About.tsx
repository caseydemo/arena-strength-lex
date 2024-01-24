import { AboutItemProps } from "../types";
import AboutItem from "./AboutItem";
import styles from "../styles/about.module.css";
export default function About() {
    const width = 200;
    const height = 250;

    // create an array of objects that contain the data for each employee
    // each object is of type AboutItemProps and contains an image of type ImageData
    // TODO - put this into a db instead of being hardcoded
    const about_data: AboutItemProps[] = [
        {            
            id: 0,
            title: "Dr. Bryon Arena",
            text: "Dr. Arena was born and raised in northeast Ohio, where he was not only a straight A student but also a serious athlete, in wrestling, track and was an all-american in football, as well participating in strength competitions. After graduating from Malone University with a bachelor’s degree in both exercise science and community health education, Dr. Arena ran a rehabilitation clinic at a local chiropractor’s office – having been a chiropractic patient himself, he was not new to the healing, restorative nature of the practice. Running the rehabilitation clinic inspired Dr. Arena to pursue his career as a chiropractor. In 2011, Dr. Arena and his wife, Lizabeth, moved to upstate New York so that he could realize this dream.       During his time at the New York Chiropractic College, Dr. Arena earned certifications in Advanced Human Sport and Performance, RockTape and Applied Kinesiology. He also revived the Whole Foods Nutrition Club, where he researched and presented the latest in whole food supplementation and nutrition. Upon graduating with a Doctor of Chiropractic, Dr. Arena and Lizabeth relocated here to Lexington to open Arena Chiropractic, PLLC, and begin serving the local community. Dr. Arena and Lizabeth were high school sweethearts and have been married since 2009. Their family also includes their beloved dogs: a golden retriever named Húsa, and an English boxer named Misha. In his spare time, Dr. Arena can be found in the gym training for his next competition, out and about enjoying the community, or in the kitchen perfecting his smoked brisket.",
            image: {
                src: "bryon_arena.jpg",
                width: width,
                height: height,
                alt: "Dr. Bryon Arena",
            },
        },
        {            
            id: 1,
            title: "Isaac Gard",
            text: "Isaac is a Lexington-native coach and trainer that has been training individuals of all backgrounds and experience levels for over 8 years. Graduating from the Lexington Healing Arts Academy and being certified through N.A.S.M. he started out as a coach that focuses primarily on strength training. However, through working with Dr. Arena of Arena Chiropractic for over 2 years he began to incorporate corrective exercise for performance and rehabilitation. Isaac currently competes in Strongman and has a love for the pursuit of strength and enjoys exposing new people to strength community.",
            image: {
                src: "isaac_gard.jpg",
                width: width,
                height: height,
                alt: "Isaac Gard",
            },
        },
    ];

    return (
        <div
            className='about-container'
            id='about-us'
        >
            {about_data.map((about, index) => (
                <AboutItem
                    key={index}
                    id={about.id}
                    title={about.title}
                    text={about.text}
                    image={about.image}                    
                />
            ))}
        </div>
    );
}
