import React from "react";
import { PricePlan, AvailableFeatureEnum } from "./interface";
import PriceColumn from "./PriceColumn";

const pricePlans: PricePlan[] = [
  {
    price: 10,
    planName: "basic",
    isPopular: false,
    features: [
      {
        name: AvailableFeatureEnum.CS_SUPPORT,
        active: true,
      },
      {
        name: AvailableFeatureEnum.SPELL_CHECK,
        active: false,
      },
      {
        name: AvailableFeatureEnum.TRANSLATION,
        active: false,
      },
    ],
  },
  {
    price: 20,
    planName: "economic",
    isPopular: true,
    features: [
      {
        name: AvailableFeatureEnum.CS_SUPPORT,
        active: true,
      },
      {
        name: AvailableFeatureEnum.SPELL_CHECK,
        active: true,
      },
      {
        name: AvailableFeatureEnum.TRANSLATION,
        active: false,
      },
    ],
  },
  {
    price: 50,
    planName: "premmium",
    isPopular: false,
    features: [
      {
        name: AvailableFeatureEnum.CS_SUPPORT,
        active: true,
      },
      {
        name: AvailableFeatureEnum.SPELL_CHECK,
        active: true,
      },
      {
        name: AvailableFeatureEnum.TRANSLATION,
        active: true,
      },
    ],
  },
];

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="pricing__content container container--pall">
        {pricePlans.map((plan, i) => (
          <PriceColumn
            key={i}
            price={plan.price}
            isPopular={plan.isPopular}
            planName={plan.planName}
            features={plan.features}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
