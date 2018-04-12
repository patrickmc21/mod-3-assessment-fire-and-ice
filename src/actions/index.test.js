import * as actions from './index';
import * as mock from '../mockData';

describe('addHouses', () => {
  it('should return a type of ADD_HOUSES', () => {
    const expected = {
      type: 'ADD_HOUSES',
      houses: mock.mockHouse
    };
    const results = actions.addHouses(mock.mockHouse);
    expect(results).toEqual(expected);
  });
})