import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { MdArrowDropDownCircle } from "react-icons/md";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@reach/disclosure";
import { FAQ } from "../interface";
import styles from "./styles.module.scss";

interface FAQCardProps extends FAQ {
  index: number;
}

const FAQCard: React.FunctionComponent<FAQCardProps> = ({
  question,
  answer,
  index,
}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={styles.card} key={index}>
      <div className={styles.icon}>
        <FaQuestion />
      </div>
      <div>
        <h3 className={styles.question}>{question}</h3>
        <Disclosure open={isOpen} onChange={() => setOpen(!isOpen)}>
          <DisclosureButton className={styles.dropdown}>
            <div className={styles.dropdown}>
              Answer <MdArrowDropDownCircle />
            </div>
          </DisclosureButton>
          <DisclosurePanel className={styles.answer}>{answer}</DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  );
};

export default FAQCard;
