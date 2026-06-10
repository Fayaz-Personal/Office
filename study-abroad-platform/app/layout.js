import "./globals.css";

export const metadata = {
  title: "Study Abroad Navigator",
  description: "Study Abroad Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}