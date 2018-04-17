import React from 'react';
import { shallow } from 'enzyme';
import TodoApp from './TodoApp';
import List from './List';

describe('TodoApp', () => {
  it('should render empty list message initially', () => {
    const component = shallow(<TodoApp />);
    expect(component.find('Message').exists()).toEqual(true);
  });
  it('should add a to do on form submit', () => {
    const component = shallow(<TodoApp />);
    component.find('form').simulate('submit', {
      preventDefault: () => {},
      target: { firstChild: { value: 'something' } }
    });

    expect(component.state().todos).toEqual(['something']);
    expect(component.find(List).props().items[0]).toEqual('something');
  });

  it('should remove a to do on form submit', () => {
    const component = shallow(<TodoApp />);
    component.setState({ todos: ['something'] });

    component.find(List).props().onClick({
      target: { innerText: 'something' },
    });

    expect(component.state().todos).toEqual([]);
  });
});
