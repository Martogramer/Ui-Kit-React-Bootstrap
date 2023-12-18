import React from "react";
import UserNavbar from "components/Navbars/UserNavbar.js";
import { Outlet } from "react-router-dom";
import TransparentFooter from "components/Footers/TransparentFooter.js";
import JardinDarkFooter from "components/Footers/JardinDarkFooter.js";

const UserInterfaces = () => {
  return (
    <>
      <UserNavbar />
      <Outlet />
      <TransparentFooter />
      <JardinDarkFooter />
    </>
  );
};

export default UserInterfaces;
