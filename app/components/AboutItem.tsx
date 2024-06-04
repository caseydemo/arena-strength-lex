import AboutCard from "./UI/AboutCard";
import Image from "next/image";
import { AboutItemProps } from "../types";
import Accordion from "./UI/Accordion";
import styles from "../styles/about.module.css";

// enforce the props to be of type AboutItemProps

export default function AboutItem(props: AboutItemProps) {

    return (
        <AboutCard>
            <h2 className={styles.about_grid_title} >{props.title}</h2>
            <Image
                className={styles.about_grid_image}
                src={`/${props.image.src}`}
                width={props.image.width}
                height={props.image.height}
                alt={props.image.alt}
            />
            <div className={styles.about_grid_description} >
                <Accordion id={props.id} title={props.title} text={props.text} />
            </div>
        </AboutCard>
    );
}
