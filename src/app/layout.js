import { Figtree, Geist_Mono } from "next/font/google";
import "./globals.css";

const figtreeSans = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dashify —– Next.js Template",
  description: "Designed and developed by DesignOrah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${figtreeSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
