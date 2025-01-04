import styles from '../styles/hero.module.css';
import Button from './UI/Button';
export default function Hero() {
    console.log('jane app url:', process.env.JANE_APP_URL)
    return (
        <div className={styles.heroImage}>
            <div className={styles.heroText}>
                <h1 className={styles.heroTitle}>Arena Strength &amp; Performance</h1>
                <p>Lexington KY&apos;s premiere weight training gym</p>
            </div>
            <div>
                <Button title="Sign Up Now!" url={process.env.JANE_APP_URL} />
                <Button title="Contact Us" url="#contact-us-form" />
            </div>
        </div>
    );
}
