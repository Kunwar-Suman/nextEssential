import "./globals.css";

export const metadata = {
  title: "Suman Portfolio",
  description: "Welcome to my website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>Welcome to my portfolio!</header>
        <main>{children}</main>
      </body>
    </html>
  );
}
