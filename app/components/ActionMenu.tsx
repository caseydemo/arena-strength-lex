import ActionCard from "./UI/ActionCard";
import Button from "./UI/Button";
import styles from "../styles/action-menu.module.css"
export default function ActionMenu(props: any) {
  return (
    <div className={`container ${styles.action_menu_container}`}>
      <div className="row justify-content-between">
        <div className="col-md-6">
          <ActionCard title="Get started today">
            <Button
              title="Get Started Today!"
              url={process.env.JANE_APP_URL}
              addClasses="btn-lg btn-primary sign-up-left"
            />
          </ActionCard>
        </div>
        <div className="col-md-6">
          <ActionCard title="Have some questions?">
            <Button
              title="Contact Us"
              url="#contact-us-form"
              addClasses="btn-lg btn-secondary sign-up-right"
            />
          </ActionCard>
        </div>
      </div>
    </div>
  );
}
