import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NewsHub — 최신 뉴스",
  description: "국내외 최신 뉴스를 한눈에",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-white text-gray-900">{children}</body>
    </html>
  );
}
