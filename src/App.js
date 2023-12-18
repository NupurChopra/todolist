import React, { useState, useEffect} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Form from './components/Form';
import Header from './components/Header';

const App = () => {

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input,setInput] = useState("");
  const [todos,setTodos] = useState(initialState);
  const [editTodo,setEditTodo] = useState(null);


  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
      // Handle the error, e.g., by logging it or displaying an error message to the user.
      console.error("Error saving data to localStorage:", error);
    }
  }, [todos]);
  

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header/>
        </div>
        <div>
          <Form 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList 
          todos={todos} 
          setTodos={setTodos}
          setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;