import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  <Head>
    <link
      href="http://fonts.cdnfonts.com/css/helvetica-neue-9"
      rel="stylesheet"
    ></link>
  </Head>;
  return <Component {...pageProps} />;
}

export default MyApp;
