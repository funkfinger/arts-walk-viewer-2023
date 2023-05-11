import Carousel from "react-bootstrap/Carousel";

import ArtCarouselItem from "./ArtCarouselItem";

const ArtCarousel = () => (
  <div className="container">
    <Carousel interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="/images/unnamed.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>first slide caption</p>
        </Carousel.Caption>
      </Carousel.Item>

      <ArtCarouselItem />
    </Carousel>
  </div>
);

export default ArtCarousel;
