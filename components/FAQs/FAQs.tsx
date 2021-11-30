import React from "react";
import FAQCard from "../FAQCard/FAQCard";
import { FAQ } from "../interface";

type FAQsProps = {
  faqs: FAQ[];
};

const FAQs: React.FunctionComponent<FAQsProps> = ({ faqs }) => {
  return (
    <section className="faq">
      <div className="faq__content container container--pall">
        <h2>FAQ</h2>
        {faqs &&
          faqs.map((faq, i) => (
            <FAQCard question={faq.question} answer={faq.answer} index={i} />
          ))}
      </div>
    </section>
  );
};

export default FAQs;
