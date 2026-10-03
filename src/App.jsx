// react/external libraries
import { useState } from "react"
// components
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
// css
import "./App.css"
export default function App() {

  const [text, setText] = useState("");
  const [tasks, setTask] = useState([]);
  const [filter, setFilter] = useState("all");
  
  function handleChange(e) {
     return setText(e.target.value);
  }
 
  function handleAddTask(e) {
    e.preventDefault();
    const newtask = {
      id: Date.now(),
      text: text,
      completed: false 
    }
    if(text.length === 0) {
      alert("Please enter your task")
    } else {
      setTask([...tasks, newtask]);
      setText("");
    }
    
  }

  function handleFilter() {
   
      if(filter === "completed") {
        return  tasks.filter((task) => task.completed);
      }
      else if(filter === "active"){
        return tasks.filter((task) => !task.completed);
      }
      else {
        return tasks;
      }
    }
  function handleToggle(id) {
    setTask(tasks.map((task)=> task.id === id ? {...task, completed:!task.completed} : task))
  }
  function handleDelete(id) {
    setTask(tasks.filter((task) => task.id !== id))
  }
  function handleClear() {
    setTask(tasks.filter((task) => !task.completed))
  }
  function handleReset() {
    setTask([]) 
  }

  let completeTasks = 0;
  tasks.forEach((task) => task.completed && completeTasks++);
  // active tasks count
  let activeTasks = 0;
  tasks.forEach((task) => !task.completed && activeTasks++);
   return <>
      <h1>Dynamic Task Manager</h1>
      <TaskForm text={text} onAdd={handleAddTask} onInput={handleChange}/>
      <TaskFilter filter = {filter} onFilterChange = {setFilter}/>
      {
        <div className="count"> 
          <span className="total-tasks">Total Tasks: {tasks.length} </span> 
          <span className="completed-tasks">Completed Tasks: {completeTasks}</span>
          <span className="active-tasks">Active Tasks: {activeTasks}</span>
        </div>
      }
      
      {
        tasks.length === 0 ? <p className="empty-message">No tasks yet. Add a task to get started!</p> : <TaskList tasks={handleFilter()} onToggle={handleToggle} onDelete={handleDelete}/>
      }
      {
        ((tasks.filter((task) => task.completed)).length !== 0 && filter === "completed" )&& <button className="clear-btn" onClick={handleClear}>Clear</button>
      }
      {/* Show Reset button only when there are tasks and the Completed filter is not selected
 */}
      {
        (filter !== "completed" && tasks.length !== 0) && <button className="reset-btn" onClick={handleReset}>Reset</button>
      }
   </>
}