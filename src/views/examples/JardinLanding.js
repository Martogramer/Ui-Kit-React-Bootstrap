import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import JardinHeaderLanding from "components/Headers/JardinHeaderLanding.js";
import FormularioContacto from "../index-sections/FormularioContacto";
import JardinDefaultFooter from "components/Footers/JardinDefaultFooter.js";
import CardSection from "components/Cards/CardSection";
import productos from "mocks/productos";

function LandingPage() {
  useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return () => {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const openCart = () => {
    setCartVisible(true);
  };

  const closeCart = () => {
    setCartVisible(false);
  };

  return (
    <>
      <div className="wrapper">
        <JardinHeaderLanding />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Productos</h2>
                <h5 className="description">filtra.</h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
              <Container>
                <Row>
                  {productos?.map((producto) => (
                    <Col key={producto.id} md="4">
                      <CardSection
                        imageUrl={producto.image}
                        description={producto.description}
                        offer={producto.discount}
                        price={producto.price}
                        addToCart={() => addToCart(producto)}
                      />
                    </Col>
                  ))}
                </Row>
              </Container>
          </Container>
        </div>
        <FormularioContacto />
        <JardinDefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;