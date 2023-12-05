import { AppProps } from "next/app";

function MyApp({ Component, pageProps }) {
    // Your custom logic here
    return <Component {...pageProps} />;
  }

export default MyApp;