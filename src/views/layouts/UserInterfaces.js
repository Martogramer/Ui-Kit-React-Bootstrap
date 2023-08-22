import React from 'react'
import NavbarUno from "components/Navbars/JardinNavbar.js";
import { Outlet } from 'react-router-dom';


const UserInterfaces = () => {
  return (
    <>
        <NavbarUno />
        <Outlet />
    </>
  ) 
}

export default UserInterfaces