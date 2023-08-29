import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
} from "reactstrap";
import { useLoginMutation } from "services/authApi";

// core components

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, isError, data }] = useLoginMutation();
  const user = JSON.parse(localStorage.getItem("user"));
  //console.log(user)
  
  const handleLogin = () => {
    login({ email, password });
  };
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  return (
    <>
      <Col className="ml-auto mr-auto" md="4">
        <Card className="card-login card-plain">
          <Form action="" className="form" method="">
            <CardHeader className="text-center">
              <div className="logo-container">
                <img alt="..." src={require("assets/img/now-logo.png")}></img>
              </div>
            </CardHeader>
            <CardBody>
              <InputGroup
                className={
                  "no-border input-lg" +
                  (firstFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons users_circle-08"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Usuario..."
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFirstFocus(true)}
                  onBlur={() => setFirstFocus(false)}
                ></Input>
              </InputGroup>
              <InputGroup
                className={
                  "no-border input-lg" + (lastFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons text_caps-small"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Last Name..."
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setLastFocus(true)}
                  onBlur={() => setLastFocus(false)}
                ></Input>
              </InputGroup>
            </CardBody>
            <CardFooter className="text-center">
              <Button
                block
                className="btn-round"
                color="info"
                href="#"
                onClick={handleLogin}
                size="lg"
              >
                Ingresar
              </Button>
              <div className="pull-left">
                <Link
                  className="link"
                  to={"registrarse"}
                  onClick={(e) => e.preventDefault()}
                >
                  <h6>Registrarse</h6>
                </Link>
              </div>
              <div className="pull-right">
                <h6>
                  <a
                    className="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Recuperar contraseña
                  </a>
                </h6>
              </div>
              {isError && <div>Something went wrong</div>}
              {data && <div>Login successful</div>}
            </CardFooter>
          </Form>
        </Card>
      </Col>
    </>
  );
}

export default SignIn;
