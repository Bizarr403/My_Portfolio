import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
const poppins = Poppins({
  weight: ["100", "200", "300", "400"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Omolade's Portfolio",
  description: "A brief intro to who I am and what I've done so far.",
  icons: "/3d rocket.png",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
