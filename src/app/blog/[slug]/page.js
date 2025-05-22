import styles from "@/styles/blog.module.css";
import Link from "next/link";
import { posts } from "@/data/posts";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <h1>Post not found</h1>;
  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.postTitle}>{post.title}</h1>
      <div className={styles.postContent}>{post.content}</div>
      <Link className={styles.backLink} href="/blog">
        &larr; Back to Blog
      </Link>
    </div>
  );
}
