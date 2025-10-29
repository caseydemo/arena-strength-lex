import Button from "./UI/Button";
import styles from "../styles/action-menu.module.css";
export default function ActionMenu(props: any) {
  const url = process.env.JANE_APP_URL ? process.env.JANE_APP_URL : "";
  
  return (
    <>
      <div className={`container ${styles.action_menu_container}`}>
        <div className={`row justify-content-center ${styles.action_menu_price_container}`}>
          <div
            className={`${styles.action_menu_price_heading}`}
          >
            Open Gym only $30 a month!
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <Button
              title="Sign Up Today!"
              url={url}
              addClasses="btn-lg btn-primary sign-up-left"
            />
          </div>
          <div className="col-md-3">
            <Button
              title="Have some questions?"
              url="#contact-us-form"
              addClasses="btn-lg btn-secondary sign-up-right"
            />
          </div>
        </div>
      </div>
    </>
  );
}
