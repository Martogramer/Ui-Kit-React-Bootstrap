import React from "react";
import HeaderUno from "components/Headers/HeaderUno.js";
import CarouselDos from "views/index-sections/CarouselDos.js";
import ActionSection from "./index-sections/ActionSection.js";
import { LogosClientes } from "components/Logos/LogosClientes.js";
import { BoxCarousell } from "components/Box/BoxCarousell.js";
import VideoSection from "../components/Sections/VideoSection.js";
import AboutSection from "./index-sections/AboutSection.js";

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
      <HeaderUno />
      <ActionSection />
      <VideoSection />
      <AboutSection />
      <CarouselDos />
      <BoxCarousell />
      <LogosClientes />
    </>
  );
}

export default Index;
