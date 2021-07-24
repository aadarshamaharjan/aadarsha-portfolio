import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import Splash from "../components/SplashScreen/Splash";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Splash>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Splash>
  );
}
export default MyApp;
