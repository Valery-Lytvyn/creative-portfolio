import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ScrollToHash from "../../helpers/ScrollToHash";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="h-full w-full flex-1">
        <Outlet />
        <ScrollToHash />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
