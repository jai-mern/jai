// TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onDelete, onUpdate }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
  );
};

export default TodoList;
