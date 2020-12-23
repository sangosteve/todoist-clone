import React,{createContext,useEffect,useState} from 'react';
import axios from "axios";
export const TodayContext = createContext();
export const TodayProvider = props=>{
    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        axios.get(
            "http://localhost:2020/tasks"
            ).then(response=>setTasks(response.data))
            .catch(error=>{
                console.log(console.error)
            })
    },[tasks]);

        return(
            <TodayContext.Provider value={[tasks,setTasks]}>
                {props.children}
            </TodayContext.Provider>
        )
}