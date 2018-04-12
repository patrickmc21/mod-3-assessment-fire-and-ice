import housesReducer from './housesReducer';
import { mockHouse } from '../mockData';

describe('housesReducer', () => {

  it('should return default state', () => {
    const expected = [];
    const results = housesReducer(undefined, {});
    expect(results).toEqual(expected);
  }); 

  it('should add houses to state', () => {
    const mockAction = {
      type: 'ADD_HOUSES',
      houses: mockHouse
    };
    const expected = mockHouse;
    const results = housesReducer(undefined, mockAction);
    expect(results).toEqual(expected);
  });
});