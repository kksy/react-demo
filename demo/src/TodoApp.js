import React from 'react';

// Component life cycle

class List extends React.Component {
  componentWillMount() { console.log('List componentWillMount'); }

  componentDidMount() { console.log('List componentDidMount'); }

  componentWillReceiveProps(props) { console.log('List componentWillReceiveProps: ', props); }

  componentWillUpdate() { console.log('List componentWillUpdate'); }

  shouldComponentUpdate() { console.log('List shouldComponentUpdate?'); return true; }

  componentDidUpdate() { console.log('List componentDidUpdate'); }

  componentWillUnmount() { console.log('List componentWillUnmount'); }

  render() {
    console.log('List render');
    return (
      <ul>
        {this.props.items.map((item) =>
          <li key={item}>{item}</li>
        )}
      </ul>
    );
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = { todos: [] };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() { console.log('TodoApp componentWillMount'); }

  componentDidMount() { console.log('TodoApp componentDidMount'); }

  componentWillReceiveProps() { console.log('TodoApp componentWillReceiveProps'); }

  componentWillUpdate(nextProps, nextState) { console.log('TodoApp componentWillUpdate with state: ', nextState); }

  shouldComponentUpdate() { console.log('TodoApp shouldComponentUpdate?'); return true; }

  componentDidUpdate() { console.log('TodoApp componentDidUpdate'); }

  componentWillUnmount() { console.log('TodoApp componentWillUnmount'); }

  onSubmit(event) {
    event.preventDefault();
    const inputValue = event.target.firstChild.value;
    this.setState({
      todos: this.state.todos.concat(inputValue)
    });
  }

  render() {
    console.log('render');
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Add a todo" />
        </form>
        <List items={this.state.todos} />
      </div>
    );
  }
}

export default TodoApp;
