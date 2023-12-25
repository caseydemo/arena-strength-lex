import styles from '../styles/hero.module.css';
export default function Hero() {
    return (
        <div data-testid="background" className={styles.heroImage}>
            <div className={styles.heroText}>
                <h1 className={styles.heroTitle}>Arena Strength &amp; Performance</h1>
                <p>Lexington KY&apos;s premiere weight training gym</p>
            </div>
        </div>
    );
}
