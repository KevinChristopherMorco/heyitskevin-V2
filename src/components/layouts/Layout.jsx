import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../partials/Header";
import Footer from "../partials/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="p-6 flex flex-col gap-24">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
