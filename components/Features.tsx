import React from "react";
import FeatureCard from "../components/FeatureCard";

interface Feature {
  imageSource: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    imageSource: "/clouds.png",
    title: "Cloud native technology",
    description:
      "MSaaS leverages Web 3.0 cloud native technologies to scale corporate mission statements to the moon",
  },
  {
    imageSource: "/money-bag.png",
    title: "Accelerate time to value",
    description:
      "MSaas is a digital enabler which helps reduce costs, and increase ROI by 200%",
  },
  {
    imageSource: "/check.png",
    title: "Reduces risk",
    description:
      "MSaaS mitigates the risks of poor corporate mission statements to your business and help meet regulatory requirements",
  },
  {
    imageSource: "/rocket.png",
    title: "Digital transformation",
    description:
      "MSaaS is about embracing digital disruption and unlocking exponential value",
  },
];

const Features = () => {
  return (
    <section className="feature">
      <div className="feature__content container container--pall">
        <div className="feature__intro">
          <h2>Why choose MSaaS?</h2>
          <p>
            We leverage cutting edge technologies to bring digital transoform to
            your organization like never before.
          </p>
        </div>
        <div className="feature__grid">
          {features.map((feature, i) => (
            <FeatureCard
              key={i}
              imageSource={feature.imageSource}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
