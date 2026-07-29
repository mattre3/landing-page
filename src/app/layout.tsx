import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

const siteUrl = "https://example.com";
const title = "Sfinansujemy i wdrożymy cyfryzację Twojej firmy | Digitalizacja procesów";
const description =
  "Diagnozujemy procesy w Twojej firmie, projektujemy architekturę systemów, pomagamy sfinansować wdrożenie nawet w 100% i dostarczamy zespół, który to wdroży. CRM, automatyzacja, ERP, integracje i AI.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "cyfryzacja firmy",
    "finansowanie cyfryzacji",
    "wdrożenie CRM",
    "automatyzacja procesów",
    "digitalizacja przedsiębiorstwa",
    "integracja systemów",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Cyfryzacja Przedsiębiorstw",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}
