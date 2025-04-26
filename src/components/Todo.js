import React, { useState } from "react";
const Todo = ({todos, deleteTodo})=>{
  



    return(
        <div>
            <ul>
           {
            todos.map((task, index)=>(
                <li key={index}>
                    <span>{task}</span>
                    <button onClick={()=>deleteTodo(index)}>Del</button>
                </li>
            ))
           }
           </ul>

        </div>
    )
}
export default Todo