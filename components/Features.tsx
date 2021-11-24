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
      "MSaaS leverages cloud native technologies to scale generation of corporate mission statements to infinity",
  },
  {
    imageSource: "/money-bag.png",
    title: "Drives revenue",
    description: "We can bring you lots of money",
  },
  {
    imageSource: "/check.png",
    title: "Reduces risk",
    description: "We can reduce risk",
  },
  {
    imageSource: "/rocket.png",
    title: "Digital transformation",
    description: "We can bring you digital transformation",
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
