import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__links col1">
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div className="footer__links col2">
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>

        <div className="footer__cta">
          <Link href="/try-now">
            <a className="button">Try Now!</a>
          </Link>
        </div>

        <div className="footer__copyright">
          &copy; Mission Statement as a Service. All Rights Reserved.
        </div>
      </div>
      <div className="attribution">Created by Matthew Lau</div>
    </footer>
  );
};

export default Footer;
