import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mission Statement as a Service</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
