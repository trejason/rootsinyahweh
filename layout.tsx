import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roots In Yahweh | R.I.Y.",
  description: "Growing in faith, community, leadership and the Word of God.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
