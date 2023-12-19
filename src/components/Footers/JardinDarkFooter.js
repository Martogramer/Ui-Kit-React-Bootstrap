/*eslint-disable*/
import React from "react";
import "./styles.css";

// reactstrap components
import { Container } from "reactstrap";
import CreatedBy from "./CreatedBy";

function DarkFooter() {
  return (
    <footer className="footer darkfooter">
      <Container>
        <nav>
          <ul>
            <li>
              <a className="">Tu Tienda Online</a>
            </li>
            <li>
              <a href="/productos">Productos</a>
            </li>
            <li>
              <a href="/">inicio</a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <img
            alt="..."
            className="teles-logo"
            src={require("assets/MetaLogo.png")}
          ></img>{" "}
          <a href="httfps://befree.ar">befree.ar</a> &{" "}
          <img
            alt="..."
            className="teles-logo"
            src={require("assets/img/vytuzp.jpg")}
          ></img>{" "}
          <a href="https://www.telescopiens.com">telescópiens</a>
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
