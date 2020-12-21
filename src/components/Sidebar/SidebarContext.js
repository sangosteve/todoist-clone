import React,{createContext,useState} from 'react';
export const SideBarContext = createContext();
export const SideBarProvider = props=>{
    const [sidebar,setSidebar] = useState([false]);
    return(
        <SideBarContext.Provider value={[sidebar,setSidebar]}>
            {props.children}
        </SideBarContext.Provider>
    )
}