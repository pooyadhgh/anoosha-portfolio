import React from "react";
import { Josefin_Sans } from "@next/font/google";
import SSRProvider from "react-bootstrap/SSRProvider";
import { Footer, Header } from "../components";
import "../styles/main.scss";

const josefin = Josefin_Sans({
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <style jsx global>{`
        html,
        body {
          font-family: ${josefin.style.fontFamily};
        }
      `}</style>

      <Header />

      <main>
        <Component {...pageProps} />
      </main>

      <Footer />
    </SSRProvider>
  );
}

export default MyApp;
