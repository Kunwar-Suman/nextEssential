import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome Suman to Next Learning!</h1>
      <Link href="/about" className={styles.link}>Go to AboutPage</Link>
    </div>
  );
}
