import React from 'react';
import { shallow } from 'enzyme';
import { HouseContainer, mapStateToProps } from './HouseContainer';
import { mockHouse } from '../../mockData';

describe('HouseContainer', () => {

  it('should match the snapshot if no houses present', () => {
    const wrapper = shallow(
      <HouseContainer houses={[]} />
    );
    expect(wrapper).toMatchSnapshot();
  }); 

  it('should match the snapshot if houses present', () => {
    const wrapper = shallow(
      <HouseContainer houses={mockHouse} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('should map houses to props', () => {
    const mockState = {houses: mockHouse};
    const expected = mockHouse;
    const mapped = mapStateToProps(mockState);
    expect(mapped.houses).toEqual(expected);
  });
});