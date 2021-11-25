import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__image"></div>

        <div className="hero__text container--pall">
          <h1>Mission Statement as a Service</h1>
          <p>
            Define your corporate culture, values, ethics, fundamental goals,
            and agenda on-demand!
          </p>
          <Link href="/try-now">
            <a className="button header__cta hide-for-mobile">Try Now!</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
