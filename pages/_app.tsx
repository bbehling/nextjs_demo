import type { AppProps } from "next/app";
import "../styles/scss/global.scss";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";

//font awesome stuff
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Layout from "../components/layout";
import Script from "next/script";
config.autoAddCss = false;

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");

    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
