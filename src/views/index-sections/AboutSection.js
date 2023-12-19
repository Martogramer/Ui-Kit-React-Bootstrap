import React from "react";
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import "./styles.css";
import { Link, NavLink } from "react-router-dom";

function AboutSection() {
  return (
    <>
      <div className="backcard">
        <Container className=" mt-12 pt-10 mb-10 pb-12">
          <br></br>
          <br></br>

          <Row className="text-center mt-5">
            <Col className="ml-auto mr-auto" md="8">
              <h2>Experiencia</h2>
              <h5 className="description">
                Con más de dos décadas en la industria audiovisual, hemos
                forjado una trayectoria creando contenidos únicos para{" "}
                <a href="#empresas" onClick={(e) => e.preventDefault()}>
                  empresas, instituciones y diversos medios.
                </a>{" "}
                Esta vasta experiencia nos consolida como expertos en el campo.
                Nuestro equipo, altamente capacitado y diversamente
                experimentado, se destaca en múltiples ámbitos profesionales.{" "}
              </h5>
            </Col>
          </Row>

          <Row className="text-center mt-5">
            <Col className="ml-auto mr-auto" md="8">
              <h2>Producción Integral</h2>
              <h5 className="description">
                Nos sumergimos en las necesidades de cada cliente, colaborando
                activamente en la concepción de ideas clave. Desde la
                formulación del guión y storyboard hasta la grabación,
                musicalización, locución y post-producción,{" "}
                <a href="#empresas" onClick={(e) => e.preventDefault()}>
                  acompañamos cada paso del camino.
                </a>{" "}
                Trabajamos en equipo para superar las expectativas de nuestros
                clientes y lograr resultados sobresalientes.
              </h5>
            </Col>
          </Row>

          <Row className="text-center mt-5">
            <Col className="ml-auto mr-auto" md="8">
              <h2>Nuestro Equipo</h2>
              <h5 className="description">
                Contamos con un equipo de profesionales{" "}
                <a href="#empresas" onClick={(e) => e.preventDefault()}>
                  altamente cualificados:
                </a>{" "}
                directores, productores, camarógrafos, guionistas, diseñadores,
                editores y animadores. Mantenemos nuestro equipamiento a la
                vanguardia, ofreciendo calidad 4K y alineándonos con las
                tendencias globales en producción audiovisual. Esto nos permite
                crear contenido moderno y de impacto, siempre al día con las
                últimas innovaciones del sector.
              </h5>
            </Col>
          </Row>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Container>
      </div>
    </>
  );
}

export default AboutSection;
