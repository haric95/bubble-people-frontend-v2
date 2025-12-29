import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Bubble People",
  description: "Bubble People Website Online Fun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <main className="relative">
          <div
            className="w-screen flex flex-col items-center absolute bg-bg-blue"
            style={{
              height: "calc(800vh)",
            }}
          >
            <Header />
            <Footer />
            {children}
            <div className="w-full h-full absolute flex flex-col pointer-events-none">
              <img src="/images/texture-1.webp" className="w-full h-auto" />
              <img src="/images/texture-1.webp" className="w-full h-auto" />
              <img src="/images/texture-1.webp" className="w-full h-auto" />
              <img src="/images/texture-1.webp" className="w-full h-auto" />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
