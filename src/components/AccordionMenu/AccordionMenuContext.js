import React,{createContext,useState} from 'react';
export const AccordionMenuContext = createContext();
export const AccordionMenuProvider = props=>{
    const [accordion,setAccordion] = useState(false);
    return(
        <AccordionMenuContext.Provider value={[accordion,setAccordion]}>
            {props.children}
        </AccordionMenuContext.Provider>
    )
}