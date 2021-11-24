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
        {/* <a
          id="btnHamburger"
          href="#"
          className="header__toggle hide-for-desktop"
        >
          <span></span>
          <span></span>
          <span></span>
        </a> */}

        <div className="header__links hide-for-mobile">
          <Link href="#">
            <a>Home</a>
          </Link>
          {/* <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a> */}
        </div>

        <a href="#" className="button header__cta hide-for-mobile">
          Request Invite
        </a>
      </nav>

      {/* <div className="header__menu has-fade">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Blog</a>
        <a href="">Careers</a>
      </div> */}
    </header>
  );
};

export default Header;
