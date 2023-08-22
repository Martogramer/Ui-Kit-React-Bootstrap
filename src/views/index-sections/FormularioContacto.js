import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Col,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row
} from "reactstrap";

function SignUp() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  return (
    <>
      <div
        className="section section-signup backcard"
        style={{
          backgroudColor: 'gray',
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px"
        }}
      >
        <Container id="contacto">
          
        <div className="section section-contact-us text-center">
          <Container border={'md'}>
            <h2 className="title">Contactate con nosotros</h2>
            <p className="description">Te enviaremos un mail con información detallada.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Nombre..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Tu consulta..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Enviar
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>


          {/* <div className="col text-center">
            <Button
              className="btn-round btn-white"
              color="default"
              to="/contacto"
              outline
              size="lg"
              tag={Link}
            >
              pagina de contacto
            </Button>
          </div> */}
        </Container>
      </div>
    </>
  );
}

export default SignUp;
