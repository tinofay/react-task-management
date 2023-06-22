import React, { useState } from 'react';

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
    event.target.reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input name='title'
          id="title"
          type="text"
          value={title}
          onChange={handleTitleChange}
        />

        <label htmlFor="description">Description:</label>
        <textarea name='description'
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
