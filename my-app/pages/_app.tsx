import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  // this is the deflaut component //
  return <Component {...pageProps} />;
}
