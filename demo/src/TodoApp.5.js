import React from 'react';

// Rendering state data and embedding javascript expression

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const inputValue = event.target.firstChild.value;
    this.setState({
      todos: this.state.todos.concat(inputValue)
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Add a todo" />
        </form>
        {this.state.todos.map((item) =>
          <div>{item}</div>
        )}
      </div>
    );
  }
}

export default TodoApp;
