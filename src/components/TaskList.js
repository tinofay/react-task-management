import { render } from "@testing-library/react";
import React,{useState} from "react";
import styles from './styles.module.css';

function TaskList() {
    const [tasks, setTasks] = useState([]);
  
    function addTask(newTask) {
      setTasks([...tasks, newTask]);
    }
  
    function deleteTask(taskIndex) {
      const updatedTasks = tasks.filter((task, index) => index !== taskIndex);
      setTasks(updatedTasks);
    }
  
    return (
      <div className={styles.container}>
        <h1>Task List</h1>
        <table>
          <thead>
            <tr>
              <th>
                ID
              </th>
              <th>
                Title
              </th>
              <th>
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr>
                <td>{index}</td>
                <td>{task}</td>
                <td><button className={styles.btn_danger} onClick={() => deleteTask(index)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <form onSubmit={(event) => {
          event.preventDefault();
          const newTask = event.target.elements.taskInput.value;
          addTask(newTask);
          event.target.reset();
        }}>
          <div className={styles.row}>
            <div><input className={styles.textbox} type="text" name="taskInput" />&nbsp;</div>
            <div><button className={styles.btn_primary} type="submit">Add Task</button></div>
          </div>
        </form>
      </div>
    );
  }

export default TaskList