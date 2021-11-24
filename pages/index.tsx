import type { NextPage } from "next";
import Features from "../components/Features";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
};

export default Home;
