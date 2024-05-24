import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Domo Umepay",
  description: "Glamping de Montaña",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta property="og:image" content="/logo-domo.png" />
      <meta property="og:image:type" content="/png" />
      <body>
      <Navbar/>
      <main className="relative overflow-hidden">
      {children}
      </main>
        <Footer/>
      </body>
    </html>
  );
}
