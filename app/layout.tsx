import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation"
import { Header } from "./components/Header"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GKP Product Managment",
  description: "Product Managment UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
