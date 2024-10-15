
import { Cairo } from 'next/font/google'
const cairo = Cairo({
  subsets: ['latin','arabic'], // You can add 'arabic' if needed
  weight: ['400', '700'], // Load the weights you need (normal, bold, etc.)
  style: ['normal'], // You can add different styles if necessary
});

import type { Metadata } from "next";
import "./globals.css";

import Header from '@/components/Header'
import Footer from '@/components/Footer'


//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Quadra Software Solution",
  description: "Quadra web dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
