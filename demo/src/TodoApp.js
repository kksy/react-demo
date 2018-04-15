import React from 'react';

const TodoApp = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log('Form got submitted!')
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Add a todo" />
    </form>
  );
};

export default TodoApp;
