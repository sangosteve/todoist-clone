import React, { useState,useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import "./Today.css";
import axios from "axios";
import {TodayContext} from './TodayContext'
import TaskList from '../../components/TaskList/TaskList';
function Today() {
  const [show, setShow] = useState(false);
  const [tasks,setTasks] = useContext(TodayContext);
  const [newTask,setNewTask] = useState('')

  
  function handleInputChange(event){

    setNewTask(event.target.value);

  }

  function createTask(){
    
    axios.post('http://localhost:2020/tasks', {
      description:newTask
    })
    .then(function (response) {
      console.log(response);
      setTasks([...tasks,response.data])
    })
  }


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="Today">
      <h2>Today</h2>
     

      <div id="panel-tasks">
        <TaskList tasks={tasks}/>
      </div>

      <span id="add_task_options">
        <Button variant="primary" onClick={handleShow} id="btn-addtask">
          <FiPlus className="nav-icon" onClick={handleShow} />
          <small>Add task</small>
        </Button>
      </span>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input value={newTask} onChange={handleInputChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={createTask}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}
export default Today;
