import "../assets/styles/main.scss";
import { Josefin_Sans } from "@next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html,
        body {
          font-family: ${josefin.style.fontFamily};
        }
      `}</style>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
