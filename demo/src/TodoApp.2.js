import React from 'react';

// Handling events

const TodoApp = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log('Form got submitted!');
    const todoForm = event.target;
    console.log(todoForm.firstChild.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Add a todo" />
    </form>
  );
};

export default TodoApp;
