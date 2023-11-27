import Image from "next/image";
import Card from "./UI/Card";
import styles from "../styles/service.module.css";
import { ServiceItemProps } from "../types";
export default function Service(props: ServiceItemProps) {  

  return (
    <Card className={styles.serviceCard}>
      <div className="row service_wrapper">
        {/* title/description */}
        <div className="col-sm service-text-wrapper">
          <h2 className="service-title">{props.title}</h2>
          <p className="service-description">{props.text}</p>
        </div>

        {/* image */}
        <div className="col-sm">
          <Image
            className={styles.serviceImage}
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
