import React from 'react';

// Refactoring: intro to props

const TodoList = (props) => (
  <div>
    {props.items.map((item) =>
      <div>{item}</div>
    )}
  </div>
);

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
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
        <TodoList items={this.state.todos} />
      </div>
    );
  }
}

export default TodoApp;
