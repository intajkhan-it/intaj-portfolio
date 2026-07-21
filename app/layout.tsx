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
  title: 'Intaj Khan | Strategic IT Manager',
  description: 'Portfolio of Intaj Khan, a Strategic IT Manager with 13+ years of experience leading IT operations and delivering high system availability.',
  keywords: ['Intaj Khan', 'IT Manager', 'Strategic IT', 'Cloud Migration', 'Cybersecurity', 'IT Infrastructure'],
  openGraph: {
    title: 'Intaj Khan | Strategic IT Manager',
    description: '13+ years of experience leading IT operations and delivering high system availability.',
    type: 'website',
  },
  verification: {
    google: 'x0ixHsMF7R9kh4lUqo4jxvf1Txcorof36tcYQn0_2RY',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
