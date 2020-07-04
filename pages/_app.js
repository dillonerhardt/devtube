import Head from "next/head";
import Header from "../components/Header";
import "../styles/index.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DevTube</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default App;
