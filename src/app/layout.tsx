import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Evolution Media Group | Autonomous Design, Human Craft",
  description: "The future of web design. We blend autonomous design systems with human creativity to build exceptional digital experiences.",
  keywords: ["web design", "portfolio", "autonomous design", "digital experiences", "creative agency"],
  authors: [{ name: "Evolution Media Group" }],
  openGraph: {
    title: "Evolution Media Group | Autonomous Design, Human Craft",
    description: "The future of web design. We blend autonomous design systems with human creativity to build exceptional digital experiences.",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
