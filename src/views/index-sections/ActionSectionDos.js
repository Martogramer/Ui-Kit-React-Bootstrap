import React from "react";
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import "./styles.css";
import { Link, NavLink } from "react-router-dom";

function ActionSectionDos() {
  return (
    <>
      <div className="backcard">
        <Container className=" mt-12 pt-10 mb-10 pb-12">
          <br></br>
          <br></br>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h2 className="title">
                Soluciones que se ajustan a tus necesidades.
              </h2>
              <h5 className="description">
                Encontrá entre nuestros productos una solución hecha a tu
                medida.
              </h5>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <NavLink to={"productos"}>
                <Button
                  className="btn-round btn-neutral mr-1"
                  color="default"
                  role="button"
                  size="lg"
                >
                  Ver Productos
                </Button>
              </NavLink>
              <Button
                className="btn-round"
                color="secondary"
                href="#contacto"
                outline
                role="button"
                size="lg"
              >
                Contactar
              </Button>
            </Col>
          </Row>
          {/* <Row className="text-center mt-5">
            <Col className="ml-auto mr-auto" md="8">
              <h2>Want more?</h2>
              <h5 className="description">
                We're going to launch{" "}
                <a
                  href="http://demos.creative-tim.com/now-ui-kit-pro-react/#/presentation?ref=nukr-index-page"
                  onClick={(e) => e.preventDefault()}
                >
                  Now UI Kit PRO React
                </a>
                . It will have huge number of components, sections and example
                pages so you can start your development with a badass Bootstrap
                4 UI Kit.
              </h5>
            </Col>
            <Col md="12">
              <Button
                className="btn-neutral btn-round"
                color="default"
                href="http://creative-tim.com/product/now-ui-kit-pro-react?ref=nukr-index-page"
                size="lg"
                target="_blank"
              >
                <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                Upgrade to PRO
              </Button>
            </Col>
          </Row> */}
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="8">
            </Col>
            <Col className="text-center m-8" lg="8" md="10">
              <Button
                className="btn-neutral btn-icon btn-round"
                color="twitter"
                href="#"
                id="tooltip86114138"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <UncontrolledTooltip delay={0.5} target="tooltip86114138">
                Seguinos en twitter
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="facebook"
                href="#"
                id="tooltip735272548"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip735272548">
                Seguinos en facebook
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="linkedin"
                href="#"
                id="tooltip647117716"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip647117716">
                Seguinos en instagram
              </UncontrolledTooltip>
            </Col>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ActionSectionDos;
