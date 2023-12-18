import React from "react";
import "./style.css";
import { Button, Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";

function VideoSection() {
  return (
    <div
      className="page-header-small page-header clear-filter"
      filter-color="black"
    >
      <div className="page-header-image h-50">
        <video autoPlay muted loop>
          <source src={require("assets/bandeja.mp4")} type="video/mp4" />
          Tu navegador no admite la reproducción de videos.
        </video>
      </div>
      <Container fluid className="h-100">
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <Row className="text-center mt-5">
            <Col className="ml-auto mr-auto" md="8">
              <h4 className="description">
                📹 Vídeos que Hablan por Sí Mismos: Desde eventos íntimos hasta
                grandes producciones, nuestra pasión es dar vida a tus ideas a
                través de vídeos impactantes y cautivadores.
              </h4>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default VideoSection;
