import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../partials/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="p-6 flex flex-col gap-10 items-center">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
