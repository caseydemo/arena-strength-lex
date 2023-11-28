import Card from "./UI/Card";
import Image from "next/image";
import { AboutItemProps } from "../types";
import Accordion from "./UI/Accordion";
import styles from "../styles/about.module.css";

// enforce the props to be of type AboutItemProps

export default function AboutItem(props: AboutItemProps) {

    return (
        <Card className={styles.about_item}>
            <h2>{props.title}</h2>
            <Image
                src={`/${props.image.src}`}
                width={props.image.width}
                height={props.image.height}
                alt={props.image.alt}
            />
            <Accordion id={props.id} title={props.title} text={props.text} />
        </Card>
    );
}
