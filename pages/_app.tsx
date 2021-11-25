import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/Header.scss";
import "../styles/Hero.scss";
import "../styles/Features.scss";
import "../styles/Footer.scss";
import "../styles/Statement.scss";
import "../styles/About.scss";
import "../styles/globals.scss";
import "../styles/animations.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
