import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
return (
    <nav className={styles.navbar}>
        <Link href="/" className={styles.link}>Home</Link> | 
        <Link href="/about" className={styles.link}>About</Link> | 
        <Link href="/blog" className={styles.link}>Blog</Link> | 
        <Link href="/projects" className={styles.link}>Projects</Link> | 
        <Link href="/contact" className={styles.link}>Contact</Link>
    </nav>
);
}
