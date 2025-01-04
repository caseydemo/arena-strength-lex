import styles from "app/styles/action-card.module.css"
export default function ActionCard(props: any) {
    return (
        <div className={`card ${styles.action_card}`}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <div className="card-text">
                    {props.children}
                </div>

            </div>

        </div>
    )
}