import React from 'react';

const Greeting = (props) => (
  <div>
    {props.text}
  </div>
);

const App = (props) => (
  <div>
    <Greeting text="Hi" />
    <Greeting text="Hello" />
    <Greeting text="Welcome" />
  </div>
);

export default App;
