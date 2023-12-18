

import React, { useState } from 'react';

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = activeFilter === 'completed'
    ? todos.filter((todo) => todo.completed)
    : activeFilter === 'todo'
      ? todos.filter((todo) => !todo.completed)
      : todos;

  return (
    <div>
      <div className='btn-area'>
        <button
          className={`primary-btn ${activeFilter === 'all' ? 'active-button' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All
        </button>
        <button
          className={`primary-btn ${activeFilter === 'todo' ? 'active-button' : ''}`}
          onClick={() => setActiveFilter('todo')}
        >
          To-Do
        </button>
        <button
          className={`primary-btn ${activeFilter === 'completed' ? 'active-button' : ''}`}
          onClick={() => setActiveFilter('completed')}
        >
          Completed
        </button>
      </div>
      {filteredTodos.map((todo) => (
        <li className='list-item' key={todo.id}>
          <input
            type='text'
            value={todo.title}
            className={`list ${todo.completed ? 'complete' : ''}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button className='button-complete task-button' onClick={() => handleComplete(todo)}>
              <i className='fa fa-check-circle'></i>
            </button>
            <button className='button-edit task-button' onClick={() => handleEdit(todo)}>
              <i className='fa fa-edit'></i>
            </button>
            <button className='button-delete task-button' onClick={() => handleDelete(todo)}>
              <i className='fa fa-trash'></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;

