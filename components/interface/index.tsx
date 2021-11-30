export interface Feature {
  name: AvailableFeature;
  active: boolean;
}

export interface PricePlan {
  isPopular: boolean;
  price: number;
  planName: string;
  features: Feature[];
}
export enum AvailableFeatureEnum {
  CS_SUPPORT = "Customer support",
  TRANSLATION = "Translation",
  SPELL_CHECK = "Spell check",
}

type AvailableFeature = "Customer support" | "Translation" | "Spell check";

export interface FAQ {
  question: string;
  answer: string;
}
