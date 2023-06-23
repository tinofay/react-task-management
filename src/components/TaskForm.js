import React, { useState } from 'react';
import Styles from './styles.module.css';

function TaskForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    props.addTask(title,description);
    setTitle(event.target.value="");
    setDescription(event.target.value="");
    }

  return (
    <div className={Styles.container}>
      <h2>Task Form</h2>
      <form onSubmit={handleSubmit}>
        <div className={Styles.row}>
          <label htmlFor="title">Title:</label>
          <input className={Styles.textbox} name='title'
            id="title"
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
            placeholder="Enter a task title" 
          />
          &nbsp;
          <label htmlFor="description">Description:</label>
          <textarea className={Styles.textbox} name='description'
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            required 
            placeholder="Enter a task description"
          />
        </div>
        <br/>
        <button className={Styles.btn_primary} type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;