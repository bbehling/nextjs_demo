import type { AppProps } from "next/app";
import "../styles/scss/global.scss";
import { useEffect } from "react";

//font awesome stuff
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Layout from "../components/layout";
import Script from "next/script";
config.autoAddCss = false;

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <Script
        id="Adsense-id"
        async
        strategy="beforeInteractive"
        onError={(e) => {
          console.error("Script failed to load", e);
        }}
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5962139115772386"
      />
      <Component {...pageProps} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
