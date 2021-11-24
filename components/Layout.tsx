import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Meta from "../components/Meta";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
