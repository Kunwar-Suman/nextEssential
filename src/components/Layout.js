import Navbar from "./Navbar";
import Footer from "./Footer";

export const metadata = {
  title: "Suman Portfolio",
  description: "Welcome to my website",
};
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
