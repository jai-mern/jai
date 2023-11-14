// Todo.js
import React, { useState } from 'react';

const Todo = ({ todo, onDelete, onUpdate }) => {
  const [status, setStatus] = useState(todo.status);

  const handleStatusChange = () => {
    const newStatus = status === 'completed' ? 'not completed' : 'completed';
    setStatus(newStatus);
    onUpdate(todo.id, { ...todo, status: newStatus });
  };

  return (
    <div className="todo-card">
      <h3>{todo.name}</h3>
      <p>{todo.description}</p>
      <p>Status: {status}</p>
      <button onClick={handleStatusChange}>Toggle Status</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;
