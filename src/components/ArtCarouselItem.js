import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ArtCarouselItem = () => (
  <Container fluid>
    <Carousel.Item>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/images/screenshot1.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Carousel.Item>
  </Container>
);

export default ArtCarouselItem;
