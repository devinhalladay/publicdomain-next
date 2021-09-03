import "../styles/globals.css";
import Collapsible from "../components/Collapsible";
import { useState } from "react";
import { Head } from "next/head";
import GlobalHeader from "../components/GlobalHeader";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalHeader />;
      <div className="content">
        <Component {...pageProps} />
      </div>
      <footer>footer</footer>
    </>
  );
}

export default MyApp;
