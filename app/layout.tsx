import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Header } from "./components/Header";
import "./globals.css";
import { Background } from "./components/Background";
import { Footer } from "./components/Footer";
import { MarcoLogo } from "./components/MarcoLogo";

export const metadata: Metadata = {
  title: "Bubble People",
  description: "Bubble People Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className="overscroll-none">
        <body className={`antialiased`}>
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
