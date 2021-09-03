import "../styles/globals.css";
import Collapsible from "../components/Collapsible";
import { useState } from "react";
import { Head } from "next/head";
import GlobalHeader from "../components/GlobalHeader";
import StickyLogo from "../components/StickyLogo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalHeader />
      <StickyLogo />
      <div className="content pt-24">
        <Component {...pageProps} />
      </div>
      <footer>footer</footer>
    </>
  );
}

export default MyApp;
