
import React,{useState} from "react";
import TaskForm from './TaskForm';
import Task from './Task';

function TaskList(task) {
    const [tasks, setTasks] = useState([]);
  
    function addTask(title,description) {
     const newTask = { id: Date.now(), title, description };
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
  
        <div>
        {tasks.map((task) => (
            <div key={task.id}>
              <Task id={task.id} title={task.title} description={task.description} editTask={editTask} deleteTask={deleteTask}/>
            </div>
))}
      </div>
        
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