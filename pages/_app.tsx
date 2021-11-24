import type { AppProps } from "next/app";
import "../styles/Header.scss";
import "../styles/Hero.scss";
import "../styles/Features.scss";
import "../styles/globals.scss";
import "../styles/animations.scss";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
