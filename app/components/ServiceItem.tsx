import Image from "next/image";
import Card from "./UI/Card";
import styles from "../styles/service.module.css";
import { ServiceItemProps } from "../types";
export default function Service(props: ServiceItemProps) {    

  return (
    <Card className={styles.service_card}>
      <div id={`service-${props.id}`} className={`row ${styles.service_wrapper}`}>
        {/* title/description */}
        <div className={`col-sm ${styles.service_text_wrapper}`}>
          <h2 className={styles.service_title}>{props.title}</h2>
          <p className={styles.description}>{props.text}</p>
        </div>

        {/* image */}
        <div className={`col-sm ${styles.service_image_wrapper}`}>
          <Image
            className={styles.service_image}
            src={`/${props.image.src}`}
            width={props.image.width}
            height={props.image.height}
            alt={props.image.alt}
          />
        </div>
      </div>
    </Card>
  );
}
