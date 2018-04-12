import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps } from './App';
import getHouses from '../../Api/apiCalls/getHouses';
import { mockHouse } from '../../mockData';
jest.mock('../../Api/apiCalls/getHouses');

describe('App', () => {

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