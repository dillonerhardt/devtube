import Head from "next/head";
import Header from "../components/Header";
import "../styles/index.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DevTube</title>
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://apis.google.com/js/platform.js" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default App;
