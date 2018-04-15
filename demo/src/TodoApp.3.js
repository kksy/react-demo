import React, { Component } from 'react';

// event: on submit

class TodoApp extends Component {
  constructor(props) {
    super(props)
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
