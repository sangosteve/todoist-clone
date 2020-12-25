import React, { useState, useContext } from "react";
import { FiChevronRight} from "react-icons/fi";
import { FiPlus} from "react-icons/fi";
import { AccordionMenuContext } from "./AccordionMenuContext";
import { Button, Modal } from "react-bootstrap";
import './AccordionMenu.css';
import ProjectList from "../ProjectList/ProjectList";

function AccordionMenu() {
  return (
    <div id="AccordionMenu">
      <ul id="accordion-widget">
        <li>
          <ProjectList/>
        </li>     
      </ul>  

    </div>
  );
}

export default AccordionMenu;
