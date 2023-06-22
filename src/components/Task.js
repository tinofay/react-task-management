
import React,{ useState } from "react";
import TaskEditor from "./TaskEditor";
import Styles from './styles.module.css';

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
            <button className={Styles.btn_warning} onClick={handleEditClick}>Edit</button>&nbsp;
            <button className={Styles.btn_danger} onClick={handleDelete}>Delete</button>
            {showEditForm && <TaskEditor id={id} title={title} description={description} editTask={editTask} setShowEditForm={setShowEditForm}/>}
        </div>
    );
    
}

    

export default Task