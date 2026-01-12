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
  title: "Projectory",
  description: "A global platform where developers and students share real-world projects, collaborate openly, and build resume-worthy experience through verified contributions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="english">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <nav className="flex items-center bg-pink-600 justify-between p-4">
            <div className="text-xl font-bold">iBuilt This</div>
            <div className="flex space-x-4">
              <a href="/about" className="hover:underline">About</a>
              <a href="/projects" className="hover:underline">Projects</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </div>
          </nav>
        </header>
        {children}
        <footer className="p-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} iBuilt This. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
