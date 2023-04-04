import { useState } from "react";
import React from "react";

const App = () => {
  const [tasks , setTasks] = useState([]);
  const [input , setInput] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const addTask = {
      id : Math.floor(Math.random() * 1000),
      text : input ,
      completed : false
    }
    setTasks([...tasks , addTask])
    setInput('');
  }

  const deleteTask = (id) => {
    let filterTasks = [...tasks ].filter((tasks) => tasks.id !== id )
    setTasks(filterTasks)
    console.log("task deleted")
    
  }

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map(task => (
        task.id === id ? {...task , completed : !task.completed} : task
      ))
    )
  }

  const date = new Date()
  const days = [ "Sunday" , "Monday" , "Tuesday" , "Wedenesday" , "Thursday" , "Friday" , "Saturday"]
  const months = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"]


  return(
    <div className="app">
      <div className="container">
        <h1><i className="fa-solid fa-helmet-safety"></i> Powerlist</h1>
        <div className="date">
          <p>{days[date.getDay()]}</p>
          <p>{date.getDate()},</p>
          <p>{months[date.getMonth()]}</p>
          <p>{date.getFullYear()}</p>
        </div>
        
        
        <form onSubmit={handleSubmit}>
          <div className="input d-flex align-items-center">
              <i className="fa-solid fa-plus me-2 fs-5"></i>
          <input
          value={input}
          onChange={event => setInput(event.target.value)} placeholder="Enter a task" type="text" />
          </div>
          
        </form>
        <div>
          {tasks.map(task => (
            <div key={task.id} onDoubleClick={() => toggleCompleted(task.id)}>
              <p
              className={`task-row ${task.completed ? 'completed' : ''}`}>{task.text} 
              <i onClick={() => deleteTask(task.id)}
               className="fa-solid fa-trash"></i>
               </p>
            </div>
          ))}
        </div>
        <p className="length">{(tasks < 1) ? 'You have no tasks' : `Tasks: ${tasks.length}`}</p>
      </div>
    </div>
  );
}

export default App;