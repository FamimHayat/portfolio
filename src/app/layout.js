"use client";

import { useState, useEffect } from "react";
import Preloader from "./components/(common)/Preloader";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/(common)/Nav";
import Footer from "./components/(common)/Footer";
import Breadcrumb from "./components/(common)/Breadcrumb";
import GridBack from "./components/(common)/GridBack";
import BackToTop from "./components/(common)/BackToTop";
import CustomCursor from "./components/(common)/CustomCursor";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Comfortaa:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {loading && <Preloader />}
        <div className={loading ? "hidden" : ""}>
          <CustomCursor />
          <Nav />
          <GridBack>
            <Breadcrumb />
            {children}
            <BackToTop />
            <Footer />
          </GridBack>
        </div>
      </body>
    </html>
  );
}
