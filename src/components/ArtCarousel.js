import Container from "react-bootstrap/Container";
// import Carousel from "react-bootstrap/Carousel";
import Carousel from "react-multi-carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "react-multi-carousel/lib/styles.css";

import { ProjectData } from "../data/data";

console.log(ProjectData);

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ArtCarousel = () => {
  return (
    <Container fluid>
      <Carousel
        responsive={responsive}
        infinite={true}
        transitionDuration={3000}
        autoPlay={true}
        centerMode={true}
      >
        {ProjectData.map((project) => {
          return (
            <div>
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={project.img} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Subtitle>{project.artist}</Card.Subtitle>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default ArtCarousel;
