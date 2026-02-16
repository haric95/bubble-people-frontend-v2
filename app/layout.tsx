import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Header } from "./components/Header";
import "./globals.css";
import { Background } from "./components/Background";
import { Footer } from "./components/Footer";

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
            <div className="content w-full p-32">{children}</div>
            <Footer />
          </main>
        </body>
      </html>
    </ViewTransitions>
  );
}
