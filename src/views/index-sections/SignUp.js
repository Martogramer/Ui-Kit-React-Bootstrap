import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  Col,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
} from "reactstrap";
import { useCreateUserMutation } from "services/authApi";
import { registerUser } from "services/registerSlice";

// core components

function SignUp() {
  const [nameFocus, setNameFocus] = React.useState(false);
  const [usernameFocus, setUsernameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passFocus, setPassFocus] = React.useState(false);
  const [confirmFocus, setConfirmFocus] = React.useState(false);
  
  // const {  } = useCreateUserMutation()

  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

/* 
  const [createUser, { isLoading }] = useCreateUserMutation(); */

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, username, email, password, confirmPassword } = formData;
    if (!username || !name || !email || !password || !confirmPassword) {
      console.log("Complete todos los campos");
      console.log({
        name,
        username,
        email,
        password,
        confirmPassword,
      });
      console.log(username)
      return;
    }

    if (password !== confirmPassword) {
      console.log("Las contraseñas no coinciden");
      console.log({
        username,
        email,
        name,
        password,
        confirmPassword,
      });
      return;
    }
    
    setFormData({
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    dispatch(registerUser(formData));
    
    /* try {
    const newUser = {
      username,
      email,
      password,
      confirmPassword,
    }
    const response = await createUser(newUser);
    console.log(response.data);
    } catch (error) {
      console.log("Error", error?.response?.data || "Something went wrong");
    } */
  };
  return (
    <>
      <Col className="ml-auto mr-auto" md="4">
        <Card className="card-login card-plain">
          <form onSubmit={handleSubmit} className="form">
            <CardHeader className="text-center">
              <div className="logo-container">
                <img alt="..." src={require("assets/MetaLogo.png")}></img>
              </div>
            </CardHeader>
            <CardBody>
              <InputGroup
                className={
                  "no-border input-lg" +
                  (nameFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons users_circle-08"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Nombre..."
                  type="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setNameFocus(true)}
                  onBlur={() => setNameFocus(false)}
                ></Input>
              </InputGroup>
              <InputGroup
                className={
                  "no-border input-lg" +
                  (usernameFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons users_circle-08"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Usuario..."
                  type="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  onFocus={() => setUsernameFocus(true)}
                  onBlur={() => setUsernameFocus(false)}
                ></Input>
              </InputGroup>
              <InputGroup
                className={
                  "no-border input-lg" +
                  (emailFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons users_circle-08"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Email..."
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                ></Input>
              </InputGroup>

              <InputGroup
                className={
                  "no-border input-lg" + (passFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons text_caps-small"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Contraseña"
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={() => setPassFocus(true)}
                  onBlur={() => setPassFocus(false)}
                ></Input>
              </InputGroup>
              <InputGroup
                className={
                  "no-border input-lg" + (confirmFocus ? " input-group-focus" : "")
                }
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="now-ui-icons text_caps-small"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Repetir Contraseña"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onFocus={() => setConfirmFocus(true)}
                  onBlur={() => setConfirmFocus(false)}
                ></Input>
              </InputGroup>
            </CardBody>
            <CardFooter className="text-center">
              <Button
                block
                className="btn-round"
                color="info"
                type="submit"
                size="lg"
              >
                Registrarse
              </Button>
              <div className="pull-left">
                <h6>
                  <a
                    className="link"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    Create Account
                  </a>
                </h6>
              </div>
              <div className="pull-right">
                <h6>
                  <a
                    className="link"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    Need Help?
                  </a>
                </h6>
              </div>
            </CardFooter>
          </form>
        </Card>
      </Col>
    </>
  );
}

export default SignUp;
