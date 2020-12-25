import React, { useState, useContext } from "react";
import axios from "axios";
import { FiChevronRight } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { Button, Modal } from "react-bootstrap";
import { ProjectContext } from "../../Contexts/ProjectContext";
import { AccordionMenuContext } from "./../AccordionMenu/AccordionMenuContext";
import "../AccordionMenu/AccordionMenu.css";
function ProjectList(props) {
  /**MODAL FUNCTIONS */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { accordion, iconCaret } = useContext(AccordionMenuContext);
  const [accordionValue, setAccordionValue] = accordion;
  const [iconCaretValue, setIconCaretValue] = iconCaret;
  const [projects, setProjects] = useContext(ProjectContext);

  const [newProject,setNewProject] = useState('')

  function ToggleAccordion() {
    setAccordionValue(!accordionValue);
    setIconCaretValue(!iconCaretValue);
  }

  function handleInputChange(event){

    setNewProject(event.target.value);

  }
  //CREATE NEW PROJECT
  function createProject(){
    
    axios.post('http://localhost:2020/tasks', {
      description:newProject
    })
    .then(function (response) {
      console.log(response);
      setProjects([...projects,response.data])
    })
  }
  return (
    <>
      <div className="link" onClick={ToggleAccordion}>
        <FiChevronRight
          className={iconCaretValue ? "icon-caret caret-down" : "icon-caret"}
        />
        Projects <FiPlus className="icon-plus" onClick={handleShow} />
      </div>
      <ul
        id="ProjectList"
        className={accordionValue ? "accordion-menu active" : "accordion-menu"}
      >
        {projects.map((project) => (
          <li key={project._id} className="list-item">
            {project.description}
          </li>
        ))}
      </ul>

      <Modal id="projectModal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input onChange={handleInputChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={createProject}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectList;
