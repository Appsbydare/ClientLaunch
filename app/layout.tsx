import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Premium Website & Web App Solutions | WebAgency",
    template: "%s | WebAgency",
  },
  description: "Transform your business with cutting-edge websites and web applications. Expert design, development, and deployment.",
  keywords: ["web design", "web development", "web apps", "SaaS", "e-commerce", "SEO"],
  authors: [{ name: "WebAgency" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webagency.com",
    siteName: "WebAgency",
    title: "Premium Website & Web App Solutions",
    description: "Transform your business with cutting-edge websites and web applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Website & Web App Solutions",
    description: "Transform your business with cutting-edge websites and web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

