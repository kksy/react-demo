import React from 'react';

// Conditional rendering

const List = (props) => (
  <ul>
    {props.items.map((item) =>
      <li key={item}>{item}</li>
    )}
  </ul>
);

const Message = () => <div>Nice! You have no things to do</div>

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
        {
          this.state.todos.length === 0 ?
            <Message /> :
            <List items={this.state.todos} />
        }
      </div>
    );
  }
}

export default TodoApp;
