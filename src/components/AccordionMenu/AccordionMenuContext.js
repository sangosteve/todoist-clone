import React,{createContext,useState} from 'react';
export const AccordionMenuContext = createContext();
export const AccordionMenuProvider = props=>{
    const [accordion,setAccordion] = useState(false);
    const [iconCaret,setIconCaret] = useState(false);
    return(
        <AccordionMenuContext.Provider value={{accordion:[accordion,setAccordion],iconCaret:[iconCaret,setIconCaret]}}>
            {props.children}
        </AccordionMenuContext.Provider>
    )
}