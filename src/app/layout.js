import { Figtree, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const figtreeSans = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const pacificoHand = Pacifico({
  variable: "--font-pacifico",
  weight: ["400"],
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
        className={`${figtreeSans.variable} ${pacificoHand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
