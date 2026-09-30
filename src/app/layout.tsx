import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Aura",
  description: "Innovación en tus manos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans bg-[#f5f5f7] text-[#1d1d1f] min-h-screen flex flex-col`}>
        <nav className="fixed top-0 left-0 right-0 z-50 apple-nav-dark">
          <div className="max-w-[980px] mx-auto px-4 h-12 flex items-center justify-between text-xs font-normal">
            <Link href="/" className="text-white hover:opacity-70 transition-opacity">
              <svg viewBox="0 0 14 18" className="h-4 fill-current"><path d="M7 0C6 1 5 2.5 5 4c1 0 2-1.5 2-3zM14 12c0 2-1 4-2.5 5-1 1-2.5 1-4 0-1-1-2.5-1-4 0-1.5 1-2.5 0-3.5-1-1.5-2-2-5-1-7 1-1.5 2-2.5 3.5-2.5 1 0 2 .5 3 .5s2-.5 3-.5c1.5 0 2.5 1 3.5 2.5-1 1-1.5 2.5-.5 4 1 1 2 1.5 2 2z"/></svg>
            </Link>
            <div className="flex gap-8 text-[#f5f5f7]/80">
              <Link href="/store" className="hover:text-white transition-colors">Store</Link>
              <Link href="/store" className="hover:text-white transition-colors">Mac</Link>
              <Link href="/store" className="hover:text-white transition-colors">iPad</Link>
              <Link href="/store" className="hover:text-white transition-colors">iPhone</Link>
              <Link href="/deals" className="hover:text-white transition-colors">Ofertas</Link>
              <Link href="/profile" className="hover:text-white transition-colors">Soporte</Link>
            </div>
            <Link href="/store" className="text-[#f5f5f7]/80 hover:text-white transition-colors">
              <svg viewBox="0 0 15 15" className="h-4 fill-current"><path d="M14 13L10.5 9.5C11.5 8 12 6.5 12 5 12 2 10 0 7 0 4 0 2 2 2 5C2 8 4 10 7 10 8.5 10 10 9.5 11 8.5L14.5 12 14 13ZM7 9C5 9 3 7 3 5C3 3 5 1 7 1 9 1 11 3 11 5 11 7 9 9 7 9Z"/></svg>
            </Link>
          </div>
        </nav>
        <main className="flex-grow pt-12">
          {children}
        </main>
      </body>
    </html>
  );
}
