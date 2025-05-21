import Layout from "@/components/Layout";
import Link from "next/link";

export default function ContactPage() {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <Link href="/contact/email">Email Here</Link>
      <p>
        If you'd like to get in touch, feel free to reach me out via email. And
        let's connect on LinkedIn.
      </p>
    </Layout>
  );
}
