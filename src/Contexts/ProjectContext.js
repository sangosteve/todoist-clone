import React,{createContext,useEffect,useState} from 'react';
import axios from "axios";
export const ProjectContext = createContext();
export const ProjectProvider = props=>{
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        axios.get(
            "http://localhost:2020/projects"
            ).then(response=>setProjects(response.data))
            .catch(error=>{
                console.log(console.error)
            })
    },[]);

        return(
            <ProjectContext.Provider value={[projects,setProjects]}>
                {props.children}
            </ProjectContext.Provider>
        )
}