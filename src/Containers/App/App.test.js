import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps } from './App';
import getHouses from '../../Api/apiCalls/getHouses';
import { mockHouse } from '../../mockData';
jest.mock('../../Api/apiCalls/getHouses');

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

  it('should call addHouses on mount', async () => {
    expect(mockAddHouses).toHaveBeenCalledWith(mockHouse);
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