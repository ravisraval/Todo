import React from 'react';

export default ({ removeTodo, todo }) => {
  return (
    <li> {todo.title}
      <button onClick={() => removeTodo(todo)}>Remove</button>
    </li>
  );
};
