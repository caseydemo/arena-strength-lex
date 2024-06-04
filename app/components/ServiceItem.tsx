import Image from "next/image";
import ServiceCard from "./UI/ServiceCard";
import styles from "../styles/service.module.css";
import { ServiceItemProps } from "../types";
export default function Service(props: ServiceItemProps) {
    return (
        <ServiceCard>
            <div className={styles.grid_title}>
				<h2>{props.title}</h2>
			</div>
			<div className={styles.grid_description}>
				{props.text}
			</div>
			<div className={styles.grid_image_container} >
				<Image src={props.image.src} width={props.image.width} height={props.image.height} alt={props.image.alt} className={styles.service_image} />
			</div>
        </ServiceCard>
    );
}
