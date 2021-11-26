import React from "react";

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="pricing__content container container--pall">
        <div className="price-column">
          <div className="price-header">
            <div className="price">
              <div className="dollar-sign">$</div>
              10
              <div className="per-month">/mo</div>
            </div>
            <div className="plan-name">Basic</div>
          </div>
          <div className="divider"></div>
          <div className="plan-feature">Feature A</div>
          <div className="plan-feature">Feature B</div>
          <div className="plan-feature inactive">Feature C</div>
          <div className="plan-feature inactive">Feature D</div>
          <div className="plan-feature inactive">Feature E</div>
          <div className="plan-feature inactive">Feature F</div>
          <button className="cta">Start Today</button>
        </div>
        <div className="price-column popular">
          <div className="most-popular">Most Popular</div>
          <div className="price-header">
            <div className="price">
              <div className="dollar-sign">$</div>
              20
              <div className="per-month">/mo</div>
            </div>
            <div className="plan-name">Professional</div>
          </div>
          <div className="divider"></div>
          <div className="plan-feature">Feature A</div>
          <div className="plan-feature">Feature B</div>
          <div className="plan-feature">Feature C</div>
          <div className="plan-feature">Feature D</div>
          <div className="plan-feature inactive">Feature E</div>
          <div className="plan-feature inactive">Feature F</div>
          <button className="cta">Start Today</button>
        </div>
        <div className="price-column">
          <div className="price-header">
            <div className="price">
              <div className="dollar-sign">$</div>
              10
              <div className="per-month">/mo</div>
            </div>
            <div className="plan-name">Basic</div>
          </div>
          <div className="divider"></div>
          <div className="plan-feature">Feature A</div>
          <div className="plan-feature">Feature B</div>
          <div className="plan-feature inactive">Feature C</div>
          <div className="plan-feature inactive">Feature D</div>
          <div className="plan-feature inactive">Feature E</div>
          <div className="plan-feature inactive">Feature F</div>
          <button className="cta">Start Today</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
