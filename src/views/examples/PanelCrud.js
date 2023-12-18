import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProductList from "./crud/ProductList";
import ProductCreate from "./crud/ProductCreate";
import './style.css';

function PanelCrud() {
  return (
    <Container>
          <h1>Panel</h1>
          <ProductList />
          <ProductCreate />
    </Container>
  );
}

export default PanelCrud;
