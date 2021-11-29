import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { MdArrowDropDownCircle } from "react-icons/md";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@reach/disclosure";
import styles from "./styles.module.scss";

const FAQ = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="faq">
      <div className="faq__content container container--pall">
        <div className={styles.icon}>
          <FaQuestion />
        </div>
        <div>
          <h3 className={styles.question}>
            How are mission statement generated?
          </h3>
          <Disclosure open={isOpen} onChange={() => setOpen(!isOpen)}>
            <DisclosureButton className={styles.dropdown}>
              <div className={styles.dropdown}>
                Answer <MdArrowDropDownCircle />
              </div>
            </DisclosureButton>
            <DisclosurePanel className={styles.answer}>
              GCP Cloud Function
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
