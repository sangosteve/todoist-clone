import React, { useState,useContext } from "react";
import "./TaskList.css";
import CheckBox from "../CheckBox/CheckBox";
import {TodayContext} from '../../pages/Today/TodayContext';
import axios from "axios";
function TaskList(props) {
    const [tasks,setTasks] = useContext(TodayContext);

  const deleteTask=(id)=> {
    //console.log(event.target.checked);
    //console.log(task)
    //AXIOS delete Task
    //then
    axios.delete('http://localhost:2020/tasks/'+id)
    .then(response=>{setTasks(tasks.filter(task=>(task._id!==id))) })
    
  }

  return (
    <>
      <ul id="TaskList">
        {tasks.map((task) => (
          <li key={task._id} className="list-item">
            <div className="CheckBox">
              <input type="checkbox" onChange={()=>deleteTask(task._id)} />
            </div>
            {task.description}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TaskList;
