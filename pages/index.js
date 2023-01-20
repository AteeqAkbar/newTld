import Head from "next/head";
import { Fragment } from "react";
import HomePage from "../components/homePage";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>HomePage</title>
        <meta name="description" content="This is the homePage" />
        <link rel="icon" href="/favicon.ico" />
        {/* Google fontStyle..... */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Head>

      <HomePage />
    </Fragment>
  );
}
