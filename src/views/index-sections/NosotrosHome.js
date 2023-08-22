import React from "react";
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

function NosotrosHome() {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">Buscas que tu jardín se vea como lo imaginas?</h3>
              <h5 className="description">Tenemos la solución para darle forma a tus ideas!
              Contactate con nosotros para agendar una visita o pedir un presupuesto.
              </h5>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-round mr-1"
                color="info"
                href="/landing-page"
                role="button"
                size="lg"
              >
                Nosotros
              </Button>
              <Button
                className="btn-round"
                color="primary"
                href="#contacto"
                outline
                role="button"
                size="lg"
              >
                Contactar
              </Button>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
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
          <br></br>
          <br></br>
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3>Seguinos en las redes!</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-neutral btn-icon btn-round"
                color="twitter"
                href="https://www.twitter.com/creativetim?ref=creativetim"
                id="tooltip86114138"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip86114138">
                Seguinos en twitter
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="facebook"
                href="https://www.facebook.com/creativetim?ref=creativetim"
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
                href="https://www.linkedin.com/company-beta/9430489/?ref=creativetim"
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
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NosotrosHome;
