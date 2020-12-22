import React, { useState, useContext } from "react";
import { FiChevronRight} from "react-icons/fi";
import { FiPlus} from "react-icons/fi";
import { AccordionMenuContext } from "./AccordionMenuContext";
import './AccordionMenu.css';

function AccordionMenu() {
  const {accordion,iconCaret} = useContext(AccordionMenuContext);
  const[accordionValue,setAccordionValue] = accordion;
  const[iconCaretValue,setIconCaretValue] = iconCaret;

  function ToggleAccordion(){
      setAccordionValue(!accordionValue);
      setIconCaretValue(!iconCaretValue);
  }
  return (
    <div id="AccordionMenu">
      <ul id="accordion-widget">
        <li>
          <div className="link" onClick={ToggleAccordion}><FiChevronRight className={iconCaretValue?"icon-caret caret-down":"icon-caret"}/>Projects <FiPlus className="icon-plus"/></div>

          <ul className={accordionValue?"accordion-menu active":"accordion-menu"}>
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
