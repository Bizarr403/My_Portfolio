import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const poppins = Poppins({
  weight: ["100", "200", "300", "400"],
  subsets: ["latin"],
});

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
