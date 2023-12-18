import React from "react";
import { Button, Container } from "reactstrap";
import "./style.css";
import CreatedBy from "components/Footers/CreatedBy";
import { Link } from "react-router-dom";

function HeaderUno() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.scrollY / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <div className="page-header-small page-header clear-filter" filter-color="black">
      <div className="page-header-image h-50" ref={pageHeader}>

      <video autoPlay muted loop>
        <source src={require("assets/bandeja.mp4")} type="video/mp4" />
        Tu navegador no admite la reproducción de videos.
      </video>
      </div>
      <Container fluid className="h-100">
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <img
            alt="..."
            className="logo-jardin"
            src={require("assets/img/casual.png")}
          />
          <h1 className="h1-seo"> Diciembre % Off </h1>
          <Link to={"productos"}>
            <Button className="btn-neutral btn-round" color="default">
              Ver Productos
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default HeaderUno;
