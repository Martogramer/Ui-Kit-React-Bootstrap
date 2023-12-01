import React from "react";
import HeaderUno from "components/Headers/HeaderUno.js";
import JardinDarkFooter from "components/Footers/JardinDarkFooter.js";
import CarruImages from "./index-sections/CarruImages.js";
import FormularioContacto from "./index-sections/FormularioContacto.js";
import NosotrosHome from "./index-sections/NosotrosHome.js";
import CarouselDos from "views/index-sections/CarouselDos.js";
import CreatedBy from "components/Footers/CreatedBy.js";
import { Container } from "reactstrap";
import Images from "./index-sections/Images.js";
import ActionSection from "./index-sections/ActionSection.js";
import BasicElements from "./index-sections/BasicElements.js";
import Javascript from "./index-sections/Javascript.js";
import Tabs from "./index-sections/Tabs.js";
import NucleoIcons from "./NucleoIcons.js";
import { LogosClientes } from "components/Logos/LogosClientes.js";
import { BoxCarousell } from "components/Box/BoxCarousell.js";

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
      <div className="wrapper">
        <HeaderUno />
        <div className="main">
          <ActionSection />
          <CarouselDos />
          <BoxCarousell />
          <LogosClientes />
        </div>
        <JardinDarkFooter />
      </div>
    </>
  );
}

export default Index;
