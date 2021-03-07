// import HeaderComp from "components/HeaderComp";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { Fragment, useState } from "react";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/index.scss";

const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
  const [loading, setLoading] = useState(true);
  if (typeof window !== "undefined") {
    window?.addEventListener("load", () => {
      setLoading(false);
    });
  }

  if (loading) return <p>Loading...</p>;
  return (
    <Fragment>
      <Head>
        <title>Love Vision Foundation</title>
        <script src="https://cdn.jsdelivr.net/npm/@glidejs/glide"></script>
        <script src="/customjs.js" type="text/javascript" defer></script>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
