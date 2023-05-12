import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ProjectModal = (props) => {
  const [show, setShow] = useState(props.show);
  const handleClose = () => setShow(false);
  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          width="100%"
          height="200vh"
          title="project"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          src={props.project.url}
        ></iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
