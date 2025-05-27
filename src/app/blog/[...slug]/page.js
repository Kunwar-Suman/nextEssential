import styles from "@/styles/blog.module.css";
import Link from "next/link";
import { posts } from "@/data/posts";

export default async function CatchAllBlogPage({ params }) {
  const awaitedParams = await params;
  const slugPath = awaitedParams.slug || [];
  // Try to find a post matching the last segment
  const slug = Array.isArray(slugPath) ? slugPath[slugPath.length - 1] : slugPath;
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return (
      <div className={styles.blogContainer}>
        <h1>Posts not found</h1>
        <Link className={styles.backLink} href="/blog">
          &larr; Back to Blog
        </Link>
      </div>
    );
  }
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
