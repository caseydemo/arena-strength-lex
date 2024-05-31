import styles from '../../styles/two-column-card.module.css';
export default function TwoColumnCard(props: any) {
    return (
        <div className="two-column-card__container" >
            <div className="two-column-card__left_column" >
                <div>
                    title
                </div>
                <div>
                    description
                </div>
            </div>
            <div className="two-column-card__right_column" >
                <div>
                    image
                </div>                
            </div>
        </div>
        
    );
}