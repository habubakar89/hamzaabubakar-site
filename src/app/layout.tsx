import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteData } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteData.meta.url || "https://example.com"),
  title: siteData.meta.title,
  description: siteData.meta.description,
  openGraph: {
    title: siteData.meta.ogTitle ?? siteData.meta.title,
    description: siteData.meta.ogDescription ?? siteData.meta.description,
    url: siteData.meta.url,
    siteName: siteData.meta.siteName,
    images: siteData.meta.ogImage
      ? [
          {
            url: siteData.meta.ogImage,
            width: 1200,
            height: 630,
            alt: siteData.meta.title,
          },
        ]
      : [],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.meta.ogTitle ?? siteData.meta.title,
    description: siteData.meta.ogDescription ?? siteData.meta.description,
    images: siteData.meta.ogImage ? [siteData.meta.ogImage] : [],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-navy font-sans leading-relaxed text-slate antialiased selection:bg-green/30 selection:text-slate-lightest">
        {children}
      </body>
    </html>
  );
}
