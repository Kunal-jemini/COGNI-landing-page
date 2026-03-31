// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Smart Home Landing",
  description: "Smart lighting, climate, security and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>   
  );
}