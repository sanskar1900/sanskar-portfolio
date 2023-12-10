import type { AppProps } from "next/app";
import "../app/globals.css";
import { GlobalThemeProvider, useGlobalContext } from "@/app/context/store";
import { useEffect } from "react";
import Layout from "@/public/components/Layout";
import Navbar from "@/public/components/navbar";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalThemeProvider>
  );
}
