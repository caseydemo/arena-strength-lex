import Card from "./UI/Card";
import Image from "next/image";
import { AboutItemProps } from "../types";

// enforce the props to be of type AboutItemProps

export default function AboutItem(props: AboutItemProps) {
    
    return (
        <Card className='about-item'>
            <h2>{props.title}</h2>
            <Image
                src={`/${props.image.src}`}
                width={props.image.width}
                height={props.image.height}
                alt={props.image.alt}
            />
            <p>{props.text}</p>
        </Card>
    );
}
