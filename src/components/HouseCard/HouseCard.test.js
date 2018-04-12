import React from 'react';
import { shallow } from 'enzyme';
import * as mock from '../../mockData';
import HouseCard from './HouseCard';

describe('HouseCard', () => {

  let mockHouse;

  beforeEach(() => {
    
  });

  it('should match the snapshot', () => {
    const mockHouse = mock.mockHouse[0];
    const wrapper = shallow(
      <HouseCard house={mockHouse} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if house founded', () => {

  });
});