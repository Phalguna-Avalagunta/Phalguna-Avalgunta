import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phalguna Avalgunta - AI & Cloud Engineer",
  description: "Professional portfolio of Phalguna Avalgunta, AI & Cloud Engineer and MSc Computer Science student at University of East London. Expertise in machine learning, cloud architecture, and software engineering.",
  keywords: ["AI Engineer", "Cloud Engineer", "Machine Learning", "Software Engineer", "Phalguna Avalgunta"],
  authors: [{ name: "Phalguna Avalgunta" }],
  creator: "Phalguna Avalgunta",
  openGraph: {
    title: "Phalguna Avalgunta - AI & Cloud Engineer",
    description: "Professional portfolio showcasing expertise in AI, cloud computing, and software engineering",
    url: "https://phalguna-avalgunta.com",
    siteName: "Phalguna Avalgunta Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phalguna Avalgunta - AI & Cloud Engineer",
    description: "Professional portfolio showcasing expertise in AI, cloud computing, and software engineering",
    creator: "@phalguna_a",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
