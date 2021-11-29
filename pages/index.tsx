import type { NextPage } from "next";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ/FAQ";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
    </>
  );
};

export default Home;
