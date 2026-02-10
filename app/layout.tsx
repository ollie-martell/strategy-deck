import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Short-Form Strategy — Presentation",
  description: "Interactive strategy deck for short-form content planning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
