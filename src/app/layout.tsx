import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Abhaysinh Gaikwad || Portfolio",
  description:
    "Fullstack Engineer with over 1 year of experience at PropFTX, specializing in building scalable backend services using Node.js, Next.js, and AWS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Photos/fev.png" type="image/icon type" />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <a href="#home" className="scrollup" id="scroll-up">
          <i className="uil uil-arrow-up scrollup_icon"></i>
        </a>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6PFPYDD0XV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`;
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "G-6PFPYDD0XV");
            `}
        </Script>
      </body>
    </html>
  );
}
