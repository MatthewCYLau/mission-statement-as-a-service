import React from "react";
import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <section className="about">
      <div className="about__content container container--pall">
        <h1>About</h1>
        <p>A Next.js app with GCP Cloud Function back-end</p>
      </div>
    </section>
  );
};

export default About;
