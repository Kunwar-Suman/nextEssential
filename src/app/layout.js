import "./globals.css";

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
