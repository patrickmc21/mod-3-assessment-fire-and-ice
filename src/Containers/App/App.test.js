import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps } from './App';
import getHouses from '../../Api/apiCalls/getHouses';
import getSwornMember from '../../Api/apiCalls/getSwornMember';
import { mockHouse, houseWithSwornMember } from '../../mockData';
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

  it('should call addHouses on mount', () => {
    expect(mockAddHouses).toHaveBeenCalledWith(houseWithSwornMember);
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