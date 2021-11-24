import React from "react";

type CardProps = {
  imageSource: string;
  title: string;
  description: string;
};

const FeatureCard: React.FunctionComponent<CardProps> = ({
  imageSource,
  title,
  description,
}) => {
  return (
    <div className="feature__item">
      <div className="feature__icon">
        <img src={imageSource} />
      </div>
      <div className="feature__title">{title}</div>
      <div className="feature__description">{description}</div>
    </div>
  );
};

export default FeatureCard;
