import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Function from './components/Function';
import Task from './components/Task';
import TaskForm from './components/TaskForm';
import TaskLIst from './components/TaskList';
class App extends Component{
  render()
 {
  return (
    <div className="App">
      <TaskForm/>
   <Task id="56-141714-yo4" title="Developer" description="I am a react developer" />
     <TaskLIst/> 
      {
      //  <Task id="56-141714-yo4" title="Developer" description="I am a react developer" />
       /* 
       <Greet name="Langton" heroineName="Chits">
        <p>I am a child Compnent</p>
      </Greet>
      <Greet name="Chitiga">
        <button className='btn-primary'>Clear</button>
        </Greet>
     <Welcome name ="Lee" heroineName="Leon"/> 
        */
     }
      
    </div>
  );
 }
}

export default App;
