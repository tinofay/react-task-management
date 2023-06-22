import React, { useState } from 'react';

function TaskEditor(props) {
  
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    // const updatedTask = {title, description }
    props.editTask(props.id,title, description );
    props.setShowEditForm(false);
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default TaskEditor;