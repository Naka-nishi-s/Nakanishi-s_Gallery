import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./component/common/header/Header";
import "./globals.css";
import "./reset.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nakanishi's Gallery",
  description: "NakanishiによるNakanishiの為のNakanishiの紹介サイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
