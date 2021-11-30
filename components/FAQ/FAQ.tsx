import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { MdArrowDropDownCircle } from "react-icons/md";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@reach/disclosure";
import styles from "./styles.module.scss";

type FAQ = {
  question: string;
  answer: string;
};

type FAQProps = {
  faqs: FAQ[];
};

const FAQ: React.FunctionComponent<FAQProps> = ({ faqs }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="faq">
      {faqs &&
        faqs.map((faq, i) => (
          <div className="faq__content container container--pall" key={i}>
            <div className={styles.icon}>
              <FaQuestion />
            </div>
            <div>
              <h3 className={styles.question}>{faq.question}</h3>
              <Disclosure open={isOpen} onChange={() => setOpen(!isOpen)}>
                <DisclosureButton className={styles.dropdown}>
                  <div className={styles.dropdown}>
                    Answer <MdArrowDropDownCircle />
                  </div>
                </DisclosureButton>
                <DisclosurePanel className={styles.answer}>
                  {faq.answer}
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>
        ))}
    </section>
  );
};

export default FAQ;
