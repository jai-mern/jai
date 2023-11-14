// App.js
import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: 'Task 1', description: 'Description 1', status: 'not completed' },
    { id: 2, name: 'Task 2', description: 'Description 2', status: 'completed' },
    // Add more initial todos as needed
  ]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoList todos={todos} onDelete={deleteTodo} onUpdate={updateTodo} />
    </div>
  );
};

export default App;
