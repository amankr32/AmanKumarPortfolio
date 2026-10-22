import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aman Kumar",
  description: "Portfolio of Aman Kumar - Backend Software Engineer, PTU Computer Science.",
  keywords: ["Aman Kumar", "Backend Engineer", "Software Engineer", "Portfolio", "IKGPTU", "Next.js"],
  authors: [{ name: "Aman Kumar" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
