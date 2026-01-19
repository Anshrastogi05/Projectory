import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = Outfit({
  // variable: "--font-outfit",
  subsets: ["latin"],
});

// const geistMono = Outfit({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Projectory | Learn from Real-World Projects",
  description: "A global platform to showcase real-world projects, learn from practical work, and strengthen your resume with verifiable, real outcomes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${outfit.className} antialiased`}
        >
          <header>
            <nav className="flex items-center bg-pink-300 justify-between p-4">
              <div className="text-xl font-bold">Projectory</div>
              <div className="flex space-x-4">
                <a href="/about" className="hover:underline">About</a>
                <a href="/projects" className="hover:underline">Projects</a>
                <a href="/contact" className="hover:underline">Contact</a>
              </div>
            </nav>
          </header>
          {children}
          <footer className="p-4 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Projectory. All rights reserved.
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
