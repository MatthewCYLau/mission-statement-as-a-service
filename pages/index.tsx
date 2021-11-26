import type { NextPage } from "next";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
    </>
  );
};

export default Home;
