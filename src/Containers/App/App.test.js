import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps } from './App';
import getHouses from '../../Api/apiCalls/getHouses';
import getSwornMember from '../../Api/apiCalls/getSwornMember';
import { mockHouse, houseWithSwornMember, swornMember } from '../../mockData';
jest.mock('../../Api/apiCalls/getHouses');
jest.mock('../../Api/apiCalls/getSwornMember');

describe('App', () => {

  let wrapper;
  let mockAddHouses;

  beforeEach(() => {
    mockAddHouses = jest.fn();
    wrapper = shallow(<App addHouses={mockAddHouses}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getHouses on mount', async () => {
    expect(getHouses).toHaveBeenCalled();
  });

  it('should call getSwornMembers on mount', async () => {
    wrapper = shallow(<App addHouses={mockAddHouses}/>, 
      {disableLifecycleMethods: true});
    const spy = jest.spyOn(wrapper.instance(), 'getSwornMembers');
    await wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalledWith(...mockHouse);
  });

  it('should call addHouses on mount', async () => {
    wrapper = shallow(<App addHouses={mockAddHouses}/>, 
      {disableLifecycleMethods: true});
    await wrapper.instance().componentDidMount();
    expect(mockAddHouses).toHaveBeenCalledWith([houseWithSwornMember]);
  });

  it('should add swornMembers to house', async () => {
    const mockHouses = mockHouse;
    const expected = [houseWithSwornMember];
    const results = await wrapper.instance().addSwornMembersToHouse(mockHouses);
    expect(results).toEqual(expected);
  });

  it('should fetch the swornMembers', async () => {
    const params = mockHouse[0];
    const expected = [swornMember];
    const results = await wrapper.instance().getSwornMembers(params);
    expect(results).toEqual(expected);
  });

  it('should call getSwornMember', async () => {
    const params = mockHouse[0];
    await wrapper.instance().getSwornMembers(params);
    expect(getSwornMember).toHaveBeenCalled();
  });

  it('should clean the endpoint id off the url', () => {
    const params = mockHouse[0].swornMembers[0];
    const expected = '255';
    const results = wrapper.instance().cleanMemberEndPoint(params);
    expect(results).toEqual(expected);
  });
});


describe('mapDispatchToProps', () => {
  it('should map addHouses to props', () => {
    const expected = {
      type: 'ADD_HOUSES',
      houses: mockHouse
    };
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.addHouses(mockHouse);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});