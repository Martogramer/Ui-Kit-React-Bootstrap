import React from "react";
import NavbarUno from "components/Navbars/JardinNavbar.js";
import HeaderUno from "components/Headers/HeaderUno.js";
import JardinDarkFooter from "components/Footers/JardinDarkFooter.js";
import JardinNavbar from "../components/Navbars/JardinNavbar.js";
import CarruImages from "./index-sections/CarruImages.js";
import FormularioContacto from "./index-sections/FormularioContacto.js";
import NosotrosHome from "./index-sections/NosotrosHome.js";
import CreatedBy from "components/Footers/CreatedBy.js";
import { Container } from "reactstrap";
import Images from "./index-sections/Images.js";
import ActionSection from "./index-sections/ActionSection.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      {/* <NavbarUno /> */}
      <div className="wrapper">
        <HeaderUno />
        <div className="main">
          <ActionSection />
          <CarruImages />
          <FormularioContacto />
          {/* <Examples />  
          <BasicElements />
          <Images />
          <Navbars />
          <Tabs />
          <Pagination />
          <Notifications />
          <Typography />
          <Javascript />
          <NucleoIcons /> 
          <CompleteExamples /> */}
        </div>
        <JardinDarkFooter />
      </div>
    </>
  );
}

export default Index;
