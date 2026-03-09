import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Luis Monasterios | Systems Automation Engineer & Data Analyst",
  description:
    "Portfolio of Luis Monasterios, a Systems Automation Engineer specializing in Python, SQL, and high-performance automated workflows. Transforming manual processes into efficient digital systems.",
  keywords: [
    "Luis Monasterios",
    "Systems Automation Engineer",
    "Data Analyst",
    "Python Automation",
    "SQL Expert",
    "Process Optimization",
    "Venezuela Developer",
    "Aragua Engineer",
  ],
  authors: [{ name: "Luis Monasterios" }],
  openGraph: {
    title: "Luis Monasterios | Systems Automation Portfolio",
    description:
      "Systems Automation Engineer & Data Analyst — Eliminating manual overhead through code.",
    url: "https://tu-dominio-aqui.vercel.app", // Recuerda cambiar esto cuando lo despliegues
    siteName: "Luis Monasterios Portfolio",
    images: [
      {
        url: "/Website-overview.png", // Asegúrate de que esta imagen esté en tu carpeta public
        width: 1200,
        height: 630,
        alt: "Luis Monasterios Portfolio Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Monasterios | Automation Engineer",
    description: "Building autonomous workflows and data-driven solutions.",
    images: ["/Website-overview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="text-white">
          <div className="container mx-auto px-4">{children}</div>
        </main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
