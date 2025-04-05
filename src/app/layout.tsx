import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Script src="https://cdn.jsdelivr.net/npm/theme-change@2.0.2/index.js"></Script> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
