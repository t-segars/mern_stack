
import './App.css';
import React, { useState} from "react";
import ToDo from './components/ToDo';

function App() {
// const newTodoStateArr = userState("");
// const newTodo = newTodoStateArr[0];
// const setNewTodo = newTodoStateArr[1];
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  

  const handleNewTodoSubmit = (event) => {
  event.preventDefault();

  if (newTodo.length === 0){
    return;
  }

  const todoItem = {
    text: newTodo,
    complete: false
  };

  setTodos([...todos, todoItem]);
  setNewTodo("");
  };

 const handleTodoDelete = (delIdx) => {
const filteredTodos = todos.filter((todo, i) => {
  return i !== delIdx;
  }); 

  setTodos(filteredTodos);
  };

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
return (
  <div style={{textAlign: "center", border: "black solid", backgroundColor: "grey"}}>
    <h1>ToDo List:</h1>
    <form  onSubmit={(event) => {
      handleNewTodoSubmit(event);
    }}>
      <input onChange={(event) => {
        setNewTodo(event.target.value);
      }} 
      type="text"
      value={newTodo}
      />
      <span>  
      <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add</button>
      </span>
    </form>

    <hr />
      {todos.map((todo, i) => {
        

        return (
        <ToDo 
        key={i}
        todo={todo} 
        handleToggleComplete={handleToggleComplete} 
        handleTodoDelete={handleTodoDelete}
        i={i}
        />
        );
      })}   
  </div>
);
}

export default App;

