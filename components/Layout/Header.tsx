import Head from "next/head";
import Navbar from "./Navbar";

export default function Header() {
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
      <Navbar />
    </>
  );
}
