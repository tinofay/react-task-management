import { render } from "@testing-library/react";
import React from "react";

// function Greet(){
//     return <h1>Hello langton</h1>
// }
const Greet = (props)=> {
   
return(
   <div>
     <h1>My name is {props.name} a {props.heroineName}</h1>
    {props.children}
   </div>
)
}


export default Greet