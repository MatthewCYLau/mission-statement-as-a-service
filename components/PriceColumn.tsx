import React from "react";
import Link from "next/link";
import { PricePlan } from "./interface";
import cn from "classnames";

const PriceColumn: React.FunctionComponent<PricePlan> = ({
  isPopular,
  price,
  planName,
  features,
}) => {
  return (
    <div className={cn("price-column", { popular: isPopular })}>
      {isPopular && <div className="most-popular">Most Popular</div>}
      <div className="price-header">
        <div className="price">
          <div className="dollar-sign">$</div>
          {price}
          <div className="per-month">/mo</div>
        </div>
        <div className="plan-name">{planName}</div>
      </div>
      <div className="divider"></div>
      {features.map((feature, i) => (
        <div
          key={i}
          className={cn("plan-feature", { inactive: !feature.active })}
        >
          {feature.name}
        </div>
      ))}
      <Link href="/try-now">
        <button className="cta">Try Now!</button>
      </Link>
    </div>
  );
};

export default PriceColumn;
