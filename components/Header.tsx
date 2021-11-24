import React from "react";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    console.log(showMenu);
    setShowMenu(!showMenu);
  };

  return (
    <header className={cn("header", { open: showMenu })}>
      <div className={cn("overlay", "has-fade", { "fade-in": showMenu })}></div>

      <nav className="container container--pall flex flex-jc-sb flex-ai-c">
        <Link href="/">
          <a className="header__logo">
            <Image src="/checked.png" alt="mountain" height={50} width={50} />
          </a>
        </Link>
        <Link href="/">
          <a onClick={toggleMenu} className="header__toggle hide-for-desktop">
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
        <Link href="/">
          <a className="button header__cta hide-for-mobile">Request Callback</a>
        </Link>
      </nav>
      <div className={cn("header__menu", "has-fade", { "fade-in": showMenu })}>
        <Link href="/">
          <a className={cn({ "fade-in": showMenu, "fade-out": !showMenu })}>
            Home
          </a>
        </Link>
        <Link href="/">
          <a className={cn({ "fade-in": showMenu, "fade-out": !showMenu })}>
            Try Now!
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
