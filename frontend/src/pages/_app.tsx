import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import Head from "next/head";
import "react-quill/dist/quill.snow.css";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/xrpense/PlasmicGlobalContextsProvider";
import "@/styles/globals.css";
import { AddrFetcher } from "@/blockchain/AddrFetcher";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider Head={Head}>
      <AddrFetcher>
        <GlobalContextsProvider>
          <ph.PageParamsProvider
            route={useRouter()?.pathname}
            params={useRouter()?.query}
            query={useRouter()?.query}
          >
            <Component {...pageProps} />
          </ph.PageParamsProvider>
        </GlobalContextsProvider>
      </AddrFetcher>
    </PlasmicRootProvider>
  );
}
