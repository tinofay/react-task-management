import React, { useState } from 'react';
import Styles from './styles.module.css';

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
          Title: <input className={Styles.textbox} type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
        </label>
        <br />
        <label>
          Description:
          <textarea className={Styles.textbox} value={description} onChange={(event) => setDescription(event.target.value)} />
        </label>
        <br />
        <button className={Styles.btn_primary} type="submit">Save</button>
      </form>
    </div>
  );
}

export default TaskEditor;