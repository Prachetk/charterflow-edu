// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/FooterTemp";

export const metadata = {
  title: "CharterFlow Edu — ACCA Preparation for India",
  description: "World-class ACCA prep, examiner-first content, and affordable pricing for Indian students.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-900">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}