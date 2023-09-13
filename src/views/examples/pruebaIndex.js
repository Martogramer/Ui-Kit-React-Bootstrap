import React from "react";
import NavbarUno from "../../components/Navbars/UserNavbar.js";
import HeaderUno from "../../components/Headers/HeaderUno.js";
import JardinDarkFooter from "../../components/Footers/JardinDarkFooter.js";
import JardinNavbar from "../../components/Navbars/UserNavbar.js";
import CarruImages from "../index-sections/CarruImages.js";
import FormularioContacto from "../index-sections/FormularioContacto.js";
import NosotrosHome from "../index-sections/NosotrosHome.js";
import CreatedBy from "../../components/Footers/CreatedBy.js";
import { Container } from "reactstrap";
import Images from "../index-sections/Images.js";
import ActionSection from "../index-sections/ActionSection.js";
import Carousel from "../index-sections/Carousel.js";
import ActionSectionDos from "views/index-sections/ActionSectionDos.js";
import CarouselDos from "views/index-sections/CarouselDos.js";
import BasicElements from "views/index-sections/BasicElements.js";
import Javascript from "views/index-sections/Javascript.js";
import Examples from "views/index-sections/Examples.js";
import CompleteExamples from "views/index-sections/CompleteExamples.js";

function PruebaIndex() {
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
        {/* <HeaderUno /> */}
        <CarouselDos />

        <div className="main">
          <ActionSectionDos />
          <CarruImages />
          <FormularioContacto />
          {/*
          <Javascript />
          <CompleteExamples /> 
          <Examples />  
          <BasicElements />
          <Images />
          <Navbars />
          <Tabs />
          <Pagination />
          <Notifications />
          <Typography />
          <NucleoIcons /> 
          */}
        </div>
        <JardinDarkFooter />
      </div>
    </>
  );
}

export default PruebaIndex
