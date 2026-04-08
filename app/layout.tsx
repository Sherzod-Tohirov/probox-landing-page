import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Probox – Where Experts Meet",
  description:
    "Atiga 1 000 000 so'm boshlang'ich to'lov bilan Iphone 17 ga ega bo'ling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
