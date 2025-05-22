import Layout from "@/components/Layout";
import Link from "next/link";
import { posts } from "@/data/posts";
import styles from "../../styles/blog.module.css";

export default function BlogPage() {
  return (
    <Layout>
      <div className={styles.blogContainer}>
        <h1 className={styles.blogTitle}>Blog</h1>
        <ul className={styles.blogList}>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link className={styles.blogLink} href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
