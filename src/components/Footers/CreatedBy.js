import React from 'react'

const CreatedBy = () => {
  return (
    <div>
        <h6 className="category category-absolute">
          Desarrollado por {" "} {" "}<img
                alt="..."
                className="teles-logo"
                src={require("assets/MetaLogo.png")}
              ></img> <a href="https://befree.ar">befree.ar</a> {" "} &
             {" "}
            <a
              href="#"
            > 
              <img
                alt="..."
                className="teles-logo"
                src={require("assets/img/vytuzp.jpg")}
                ></img>
            </a><a href="https://www.telescopiens.com">Telescopiens</a>
          </h6>
    </div>
  )
}

export default CreatedBy