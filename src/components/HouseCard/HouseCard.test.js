import React from 'react';
import { shallow } from 'enzyme';
import * as mock from '../../mockData';
import HouseCard from './HouseCard';

describe('HouseCard', () => {

  let mockHouse;

  beforeEach(() => {
    mockHouse = mock.houseWithSwornMember;
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

  it('should match the snapshot if a sworn member is alive', () => {
    mockHouse.swornMembers[0].died = "";

    const wrapper = shallow(
      <HouseCard house={mockHouse} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if a sworn member has one title', () => {
    mockHouse.swornMembers[0].titles = ['Ser'];

    const wrapper = shallow(
      <HouseCard house={mockHouse} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should toggle the selected state on click', () => {
    const wrapper = shallow(
      <HouseCard house={mockHouse} />
    );
    const expected = true;
    wrapper.instance().handleClick();
    expect(wrapper.state().selected).toEqual(expected);
  });
});