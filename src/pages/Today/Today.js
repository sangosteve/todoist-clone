import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import "./Today.css";
function Today() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="Today">
      <h2>Today</h2>
      <span id="add_task_options">
        <Button variant="primary" onClick={handleShow} id="btn-addtask">
          <FiPlus className="nav-icon" onClick={handleShow} />
          <small>Add task</small>
        </Button>
      </span>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Today;
