import { Loader } from "@/app/components/Loader";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Header } from "./components/Header";
import "./globals.css";
import { Background } from "./components/Background";
import { Footer } from "./components/Footer";
import { MarcoLogo } from "./components/MarcoLogo";
import { Lexend_Deca } from "next/font/google";

export const metadata: Metadata = {
  title: "Bubble People",
  description: "Bubble People Website",
};

const Lexend = Lexend_Deca({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className="overscroll-none">
        <body className={`antialiased ${Lexend.className}`}>
          <Loader />
          <Background />
          <main className="relative">
            <Header />
            <div className="content w-full px-32 pt-8 pb-32">{children}</div>
            <Footer />
            <MarcoLogo />
          </main>
        </body>
      </html>
    </ViewTransitions>
  );
}
