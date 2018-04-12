import React from 'react';
import { shallow } from 'enzyme';
import * as mock from '../../mockData';
import HouseCard from './HouseCard';

describe('HouseCard', () => {

  let mockHouse;

  beforeEach(() => {
    mockHouse = mock.mockHouse[0];
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(
      <HouseCard house={mockHouse} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if house founded', () => {
    mockHouse.founded = 'Founded';
    const wrapper = shallow(
      <HouseCard house={mockHouse} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if house words exist', () => {
    mockHouse.words = 'We HAVE WORDS';
    const wrapper = shallow(
      <HouseCard house={mockHouse} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});