import Carousel from "react-bootstrap/Carousel";

const ArtCarouselItem = () => (
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/unnamed.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>first slide caption</p>
    </Carousel.Caption>
  </Carousel.Item>
);

export default ArtCarouselItem;
