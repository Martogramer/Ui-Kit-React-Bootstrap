import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Button,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/bg1.jpg"),
    altText: "Nature, United States",
    caption: "Nature, United States",
  },
  {
    src: require("assets/img/bg3.jpg"),
    altText: "Somewhere Beyond, United States",
    caption: "Somewhere Beyond, United States",
  },
  {
    src: require("assets/img/bg4.jpg"),
    altText: "Yellowstone National Park, United States",
    caption: "Yellowstone National Park, United States",
  },
];

const ImgStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "cover",
}

function CarouselDos() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {items.map((item) => {
          return (
            <CarouselItem
              onExiting={onExiting}
              onExited={onExited}
              key={item.src}
            >
              <img style={ImgStyle} src={item.src} alt={item.altText} />
              <Container>
                <div className="content-center brand">
                  <div className="carousel-caption d-none content-center d-md-block">
                    <h1 className="h1-seo"> Agosto % Off </h1>
                    <h5>{item.caption}</h5>
                    <Link to={"productos"}>
                      <Button className="btn-neutral btn-round" color="default">
                        Ver Productos
                      </Button>
                    </Link>
                  </div>
                </div>
              </Container>
            </CarouselItem>
          );
        })}
        <a
          className="carousel-control-prev"
          data-slide="prev"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            previous();
          }}
          role="button"
        >
          <i className="now-ui-icons arrows-1_minimal-left"></i>
        </a>
        <a
          className="carousel-control-next"
          data-slide="next"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            next();
          }}
          role="button"
        >
          <i className="now-ui-icons arrows-1_minimal-right"></i>
        </a>
      </Carousel>
    </>
  );
}

export default CarouselDos;
