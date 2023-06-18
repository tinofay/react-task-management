import { render } from "@testing-library/react";
import React from "react";

function Task(task){
    return <h1>Hello Team <br/>
    my id is {task.id}, <br/>
    {task.title}    <br/>
    {task.description}</h1>
}

export default Task