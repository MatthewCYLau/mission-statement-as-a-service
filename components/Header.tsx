import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="overlay has-fade"></div>

      <nav className="container container--pall flex flex-jc-sb flex-ai-c">
        <Link href="/">
          <a className="header__logo">
            <Image src="/mountain.png" alt="mountain" height={50} width={60} />
          </a>
        </Link>
        <Link href="/">
          <a
            id="btnHamburger"
            href="/"
            className="header__toggle hide-for-desktop"
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </Link>
        <div className="header__links hide-for-mobile">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>Try Now!</a>
          </Link>
        </div>
        <a href="/" className="button header__cta hide-for-mobile">
          Request Invite
        </a>
      </nav>
      <div className="header__menu has-fade">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>Try Now!</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
