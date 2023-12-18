import React from "react";
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import "./styles.css";
import { Link, NavLink } from "react-router-dom";

function ActionSection() {
  return (
    <>
      <div className="backcard">
        <Container className=" mt-12 pt-10 mb-10 pb-12">
          <br></br>
          <br></br>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h2 className="title">
              Bienvenido a FYM - Donde las Historias Cobran Vida
              </h2>
              <h5 className="description">
              En FYM somos mucho más que una agencia audiovisual; somos contadores de historias, capturadores de momentos y creadores de memorias eternas. 💫
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
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center m-8" lg="8" md="10">
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

export default ActionSection;
