
import React,{useId, useState} from "react";
import TaskForm from './TaskForm';
import Task from './Task';
import Styles from './styles.module.css';

function TaskList(task) {
    const [tasks, setTasks] = useState([]);
    const id =useId();
    function addTask(title,description) {
     const newTask = { id, title, description };
      setTasks([...tasks, newTask]);
     
    }
  
    const deleteTask = (taskId) => {{
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    }}
    
    const editTask = (taskId, title, description) => {
     
      const updatedTasks = tasks.map((task) => {

        if (task.id === taskId) {
          return { ...task, title, description };
        } else {
          return task;
        }
      });
      setTasks(updatedTasks);
    };
    return (
      <div>
        <TaskForm addTask={addTask} />
        <h1>Task List</h1>
  
        <div className={Styles.container}>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>
                    <Task id={task.id} title={task.title} description={task.description} editTask={editTask} deleteTask={deleteTask}/>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    );
  }

export default TaskList