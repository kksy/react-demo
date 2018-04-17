import React from 'react';

const List = (props) => (
  <ul>
    {props.items.map((item) =>
      <li key={item} onClick={props.onClick}>{item}</li>
    )}
  </ul>
);

export default List;
