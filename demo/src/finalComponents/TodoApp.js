import React from 'react';
import List from './List';

const Message = () => <div>Nice! You have no things to do</div>

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = { todos: [] };
    this.onSubmit = this.onSubmit.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const inputValue = event.target.firstChild.value;
    this.setState({
      todos: this.state.todos.concat(inputValue)
    });
  }

  removeTodo(event) {
    const item = event.target.innerText;
    const todos = this.state.todos;
    const indexDone = todos.indexOf(item);
    this.setState({
      todos: this.state.todos.filter((todo, index) => index !== indexDone),
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
            <List items={this.state.todos} onClick={this.removeTodo} />
        }
      </div>
    );
  }
}

export default TodoApp;
