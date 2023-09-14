import React from "react";
import { Container } from "reactstrap";
import ProductList from "./crud/ProductList";
import ProductCreate from "./crud/ProductCreate";
import ProductUpdate from "./crud/ProductUpdate";
import ProductDelete from "./crud/ProductDelete";

function PanelCrud() {
  return (
    <Container>
      <h1>Panel</h1>
      <ProductList />
      <ProductCreate />
      {/* <ProductUpdate _id={1} />  */}
      {/* <ProductDelete _id={1} /> */}
    </Container>
  );
}

export default PanelCrud;