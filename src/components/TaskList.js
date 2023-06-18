import { render } from "@testing-library/react";
import React,{useState} from "react";

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
      <div>
        <h1>Task List</h1>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
        <form onSubmit={(event) => {
          event.preventDefault();
          const newTask = event.target.elements.taskInput.value;
          addTask(newTask);
          event.target.reset();
        }}>
          <input type="text" name="taskInput" />
          <button type="submit">Add Task</button>
        </form>
      </div>
    );
  }

export default TaskList