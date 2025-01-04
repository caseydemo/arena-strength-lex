import ActionCard from "./UI/ActionCard";
import Button from "./UI/Button";
import styles from "../styles/action-menu.module.css";
export default function ActionMenu(props: any) {
  return (
    <div className={`container ${styles.action_menu_container}`}>
      <div className="row justify-content-center">
        <div className="col-md-3">
          <Button
            title="Get Started Today!"
            url={process.env.JANE_APP_URL}
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
  );
}
