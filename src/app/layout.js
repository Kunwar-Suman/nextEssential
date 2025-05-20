import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>My sample app</header>
        <main>{children}</main>
      </body>
    </html>
  );
}
