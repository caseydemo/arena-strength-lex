import styles from "../styles/hero.module.css";
import ActionMenu from "./ActionMenu";

export default function Hero() {
  return (
    <>
        <div className={styles.heroImage}>
            <div className={styles.heroText}>
                <h1 className={styles.heroTitle}>Arena Strength &amp; Performance</h1>
                <p className={styles.hero_subtitle}>Lexington&apos;s Premiere Weight Training Gym</p>
                <ActionMenu />
            </div>
        </div>
    </>
  );
}
