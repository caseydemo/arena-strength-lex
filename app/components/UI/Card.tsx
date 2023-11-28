import styles from "../../styles/card.module.css";
export default function Card(props: any) {

  // const classes = `container card ${styles.arena_card} ` + (props.className ? props.className : "");
  const classes = `container card ${styles.arena_card} `;
  return (
    <div className={classes}>
      {props.children}
    </div>
  );
}
