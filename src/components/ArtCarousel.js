import React, { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
// import Carousel from "react-bootstrap/Carousel";
import Carousel from "react-multi-carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

// import ProjectModal from "./ProjectModal";

import "react-multi-carousel/lib/styles.css";

import { ProjectData } from "../data/data";

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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const ref = useRef();

  const [project, setProject] = useState(ProjectData[0]);

  return (
    <Container fluid>
      <Carousel
        responsive={responsive}
        infinite={true}
        // transitionDuration={3000}
        autoPlay={true}
        centerMode={true}
      >
        {ProjectData.map((p) => {
          return (
            <div key={p.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={p.img}
                  onClick={() => {
                    setProject(p);
                    setShow(true);
                    console.log(show);
                  }}
                />
                <Card.Body>
                  <Card.Title>{p.title}</Card.Title>
                  <Card.Subtitle>{p.artist}</Card.Subtitle>
                  <Card.Text>{p.description}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setProject(p);
                      setShow(true);
                      console.log(show);
                    }}
                  >
                    Open Project
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Carousel>

      <Modal
        // size="lg"
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            ref={ref}
            // onLoad={onLoad}
            // height={height}
            height="900px"
            width="100%"
            title="project"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            src={project.url}
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ArtCarousel;
