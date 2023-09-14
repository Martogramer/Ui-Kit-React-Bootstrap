import React from 'react'
import UserNavbar from "components/Navbars/UserNavbar.js";
import { Outlet } from 'react-router-dom';


const UserInterfaces = () => {
  return (
    <>
        <UserNavbar />
        <Outlet />
    </>
  ) 
}

export default UserInterfaces