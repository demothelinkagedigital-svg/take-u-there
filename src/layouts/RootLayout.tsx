import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";

export default function RootLayout() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Take U There Service LLC | We Buy Houses Cash in KCMO</title>
        <meta
          name="description"
          content="Sell your KCMO property fast for cash. No repairs, no fees, no commissions. Close in 7 days with Take U There Service LLC."
        />
        <meta name="author" content="Take U There Service LLC" />
        <meta property="og:title" content="Take U There Service LLC | Cash Offers in KCMO" />
        <meta
          property="og:description"
          content="We buy houses fast for cash in Kansas City. No repairs, no fees, fast closing."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
        />
      </Helmet>
      <Preloader />
      <Header />
      <main className="min-h-screen text-foreground overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
