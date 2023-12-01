import React from "react";
import { Container } from "reactstrap";
import ProductList from "./crud/ProductList";
import ProductCreate from "./crud/ProductCreate";
import ProductUpdate from "./crud/ProductUpdate";
import ProductDelete from "./crud/ProductDelete";
import './style.css';

function PanelCrud() {
  return (
    <>
    <div className="container">
      <div className="panel">
        <h1>Panel</h1>
      </div>
      <div className="sub-panels">
        <div className="sub-panel">
          <ProductList />
        </div>
        <div className="sub-panel">
          <ProductCreate />
        </div>
      </div>
    </div>
    </>
  );
}

export default PanelCrud;