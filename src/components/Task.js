
import React,{ useState } from "react";
import TaskEditor from "./TaskEditor";


function Task(props){

  const { id,title ,description, deleteTask,editTask } = props;
  
  const [showEditForm, setShowEditForm] = useState(false);


  const handleEditClick = () => {
    setShowEditForm(true);
  };
  const handleDelete = () => {
    props.deleteTask(id);
  };
      return(
        
        <div>
        
        <ul>
   <li>
      {title}---{description}
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleEditClick}>Edit</button>
      </li>
  </ul>

  {showEditForm && <TaskEditor id={id} title={title} description={description} editTask={editTask} setShowEditForm={setShowEditForm}/>}
      </div>
    );
    
    }

    

export default Task