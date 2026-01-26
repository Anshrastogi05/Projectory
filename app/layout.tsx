import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

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
         <Header/>
          {children}
         

       <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}
