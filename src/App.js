import React,{ Component } from 'react';
import './App.css';
import TaskLIst from './components/TaskList';
class App extends Component{
  render()
 {
  return (
    <div className="App">
     <TaskLIst/>  
    </div>
  );
 }
}

export default App;
