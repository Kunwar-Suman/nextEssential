import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Suman's Blog!</h1>
      <p className={styles.subtitle}>Explore more about me and my work:</p>

      <nav className={styles.nav}>
        <Link href="/about" className={styles.link}>About Me</Link>
        <Link href="/blog" className={styles.link}>Blog</Link>
        <Link href="/projects" className={styles.link}>Projects</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
      </nav>
    </div>
  );
}
