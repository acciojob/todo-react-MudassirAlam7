
import React, { useState } from "react";
import './../styles/App.css';
import Todo from "./Todo";

const App = () => {

  const[todos, setTodos] = useState([])
  const[input, setInput] = useState('')
  console.log(todos);
  

  //function to add todo in list

  function addTodo(){
    if(input){
      setTodos([...todos, input])
      setInput('')
    }
  }
  function deleteTodo(indexTodel){
      setTodos(todos.filter((_, index) =>index !==indexTodel))
  }
  return (
    <div>
      <h2>To-do List</h2>

      <div className="input-group">
        <input type="text" name="" id="todo-input" placeholder="Add Task" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button id="add-btn" onClick={addTodo}>Add Task</button>
      </div>
      <Todo todos = {todos} deleteTodo = {deleteTodo}/>
    </div>
  )
}

export default App
