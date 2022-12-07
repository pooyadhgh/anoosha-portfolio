import React from "react";
import { Josefin_Sans } from "@next/font/google";
import { SSRProvider, Container } from "react-bootstrap";
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

      <Container as='main'>
        <Component {...pageProps} />
      </Container>

      <Footer />
    </SSRProvider>
  );
}

export default MyApp;
