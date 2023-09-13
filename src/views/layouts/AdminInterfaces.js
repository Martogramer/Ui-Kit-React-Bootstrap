import React from 'react'
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import { Outlet } from 'react-router-dom';
import { Container } from 'reactstrap';
import TransparentFooter from 'components/Footers/TransparentFooter';


const AdminInterfaces = () => {
  return (
    <>
      <AdminNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/register.avif") + ")"
          }}
        ></div>
        <div className="content">
          <Container>
            <Outlet/>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  ) 
}

export default AdminInterfaces