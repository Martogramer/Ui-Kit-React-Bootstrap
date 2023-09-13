import React from "react";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  FormGroup,
  Label,
  Col
} from "reactstrap";

// core components
import TransparentFooter from "components/Footers/TransparentFooter.js";
import { Outlet } from "react-router-dom";

function AuthInterfaces() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [textarea, setTextarea] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
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
  );
}

export default AuthInterfaces;
