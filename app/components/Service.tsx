import Image from "next/image";
import Card from "./UI/Card";
import styles from "../styles/service.module.css";
export default function Service(props: any) {

  console.log(props)

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
            src={`/${props.image_src}`}
            width={props.image_width}
            height={props.image_height}
            alt={props.image_alt}
          />
        </div>
      </div>
    </Card>
  );
}
