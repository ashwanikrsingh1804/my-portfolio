import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashwani Kumar Singh — Cloud Engineer",
  description:
    "Cloud Engineer | MS Cloud Computing | Node.js | Python | Dublin, Ireland",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
