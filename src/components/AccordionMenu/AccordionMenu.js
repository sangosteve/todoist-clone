import React, { useState, useContext } from "react";
import { FiChevronRight} from "react-icons/fi";
import { AccordionMenuContext } from "./AccordionMenuContext";
import './AccordionMenu.css';

function AccordionMenu() {
  const [accordion,setAccordion] = useContext(AccordionMenuContext);  
  function ToggleAccordion(){
      setAccordion(!accordion);
  }
  return (
    <div id="AccordionMenu">
      <ul id="accordion-widget">
        <li>
          <div className="link" onClick={ToggleAccordion}><FiChevronRight/>Projects</div>

          <ul className={accordion?"accordion-menu active":"accordion-menu"}>
            <li>
              <a>Html</a>
            </li>
            <li>
              <a>Css</a>
            </li>
            <li>
              <a>Javascript</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default AccordionMenu;
