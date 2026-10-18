import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: `${profile.name} | ${profile.role}`,
  description: profile.description,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: profile.githubUrl }],
  creator: profile.name,
  keywords: [
    "Odoo developer", "Senior Odoo Backend Developer", "Python", "Odoo OWL",
    "NestJS", "FastAPI", "PostgreSQL", "open source", "backend engineering",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: profile.siteUrl,
    siteName: `${profile.name} Portfolio`,
    title: `${profile.name} | ${profile.role}`,
    description: profile.description,
    images: [
      {
        url: "/images/branding/og-preview.png",
        width: 1200,
        height: 630,
        alt: `${profile.name} — Senior Odoo Backend Developer & Software Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.role}`,
    description: profile.description,
    images: ["/images/branding/og-preview.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
