import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('List', () => {
  it('should render list item', () => {
    const component = shallow(<List items={['something']} />);
    const targetItem = component.findWhere((node) => node.type() === 'li');

    expect(targetItem.exists()).toEqual(true);
    expect(targetItem.text()).toEqual('something');
  });

  it('should have an onClick handler on list items', () => {
    const onClickHandler = jest.fn();
    const component = shallow(<List items={['something']} onClick={onClickHandler} />);
    const targetItem = component.findWhere((node) => node.type() === 'li');

    targetItem.simulate('click')

    expect(onClickHandler).toBeCalled();
  });
});

