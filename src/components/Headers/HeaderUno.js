/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
// core components
import "./style.css";
import CreatedBy from "components/Footers/CreatedBy";
import { Link } from "react-router-dom";
function HeaderUno() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
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
    <>
      <div className="page-header clear-filter" filter-color="black">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/home.avif") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            {/* <img
              alt="..."
              className=" logo-jardin"
              src={require("assets/img/casual.png")}
            ></img> */}
            <h1 className="h1-seo"> Agosto % Off </h1>
            <h5>Registrate y recibí ofertas esclusivas!</h5>
            <Link to={"productos"}>
              <Button className="btn-neutral btn-round" color="default">
                Ver Productos
              </Button>
            </Link>
          </div>

          <CreatedBy />
        </Container>
      </div>
    </>
  );
}

export default HeaderUno;
