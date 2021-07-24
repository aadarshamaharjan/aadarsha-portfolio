import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import Splash from "../components/SplashScreen/Splash";
import Particles from "react-particles-js";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Aadarsha Maharjan</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content="Free Web tutorials" />
        <meta
          name="keywords"
          content="Portfolio, Nepal, Java, Web, Developer, React, Next, Javascript, JS, Node"
        />
      </Head>
      <Splash>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Splash>
    </>
  );
}
export default MyApp;
