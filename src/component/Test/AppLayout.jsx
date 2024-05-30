import React from "react";
import Header from "../../layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../layout/Footer";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
