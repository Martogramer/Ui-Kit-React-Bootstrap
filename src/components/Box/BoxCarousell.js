import React from "react";
import "./style.css"; // Archivo CSS para los estilos
import { Carousel } from "reactstrap";
import CarouselSection from "views/index-sections/Carousel";

export const BoxCarousell=()=> {
  return (
    <>
    
    <div className="carousel">
      <div className="box">
        <div className="boxe">

        <h3>Título 1</h3>
        <p>Descripción corta del primer elemento.</p>
        <a href="#link">Ver más <i className="fas fa-arrow-right"></i></a>
        </div>
      </div>
      <div className="box">
        <div className="boxe">

        <h3>Título 2</h3>
        <p>Descripción corta del segundo elemento.</p>
        <a href="#link">Ver más <i className="fas fa-arrow-right"></i></a>
        </div>
      </div>
      <div className="box">
        <div className="boxe">

        <h3>Título 3</h3>
        <p>Descripción corta del tercer elemento.</p>
        <a href="#link">Ver más <i className="fas fa-arrow-right"></i></a>
        </div>
      </div>
      <div className="box">
        <div className="boxe">

        <h3>Título 3</h3>
        <p>Descripción corta del tercer elemento.</p>
        <a href="#link">Ver más <i className="fas fa-arrow-right"></i></a>
        </div>
      </div>
      <div className="box">
        <div className="boxe">

        <h3>Título 3</h3>
        <p>Descripción corta del tercer elemento.</p>
        <a href="#link">Ver más <i className="fas fa-arrow-right"></i></a>
        </div>
      </div>
      <div className="box">
        <div className="boxe">

        <h3>Título 3</h3>
        <p>Descripción corta del tercer elemento.</p>
        <a href="#link">Ver más <i className="fas fa-arrow-right"></i></a>
        </div>
      </div>
      {/* Agrega más cajas según sea necesario */}
    </div>
    </>
  );
}
