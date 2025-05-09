import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";
import { headers } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamad Khawam",
  description: "Personal website of Mohamad Khawam",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const heads = await headers();
  const theme = heads.get("x-theme") || "cupcake";

  return (
    <html lang="en" data-theme={theme}>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex h-full flex-col md:flex-row  bg-base-300 text-base-content`}
      >

        <NavBar />
        <div className="flex-1 max-h-screen md:overflow-y-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
