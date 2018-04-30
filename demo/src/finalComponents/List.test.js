import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('List', () => {
  it('should render list items', () => {
    const component = shallow(<List items={['something', 'another thing']} />);

    expect(component.find({ children: 'something' }).exists()).toEqual(true);
    expect(component.find({ children: 'another thing' }).exists()).toEqual(true);
  });

  it('should have an onClick handler on list items', () => {
    const onClickHandler = jest.fn();
    const component = shallow(<List items={['something']} onClick={onClickHandler} />);
    const targetItem = component.findWhere((node) => node.type() === 'li');

    targetItem.simulate('click')

    expect(onClickHandler).toBeCalled();
  });
});

