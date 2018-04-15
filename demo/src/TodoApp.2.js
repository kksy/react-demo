import React, { Component } from 'react';

// A stateful component so we can save the value from input

class TodoApp extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  render() {
    return (
      <div>
        <form>
          <input value={this.state.value} type="text" placeholder="Add a todo" />
        </form>
      </div>
    );
  }
}

export default TodoApp;
