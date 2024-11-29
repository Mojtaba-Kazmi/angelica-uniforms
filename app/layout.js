import { defaultMetadata } from "@/metadata/metadata";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ScrollToTop from "@/components/scroll-to/ScrollTo";
import CTAButton from "@/components/cta-button/CTAButton";
import { Suspense } from "react";
import Spinner from "@/components/spinner/Spinner";
import { Analytics } from "@vercel/analytics/react"
import Head from "next/head";
import "./globals.css";

export const metadata = defaultMetadata;

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        </Head>
        <Header />
        <Suspense fallback={<Spinner />}>
          <main>
            {children}
          </main>
        </Suspense>
        <Footer />
        <CTAButton />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
