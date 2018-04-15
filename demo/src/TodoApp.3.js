import React from 'react';

// Stateful component

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const todoForm = event.target;
    console.log(todoForm.firstChild.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Add a todo" />
        </form>
      </div>
    );
  }
}

export default TodoApp;
