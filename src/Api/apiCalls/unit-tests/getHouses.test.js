import getHouses from '../getHouses';
import { mockHouse } from '../../../mockData';

describe('getHouses', () => {

  let mockUrl;
  let mockOptions;

  beforeEach(() => {
    mockUrl = 'http://localhost:3001/api/v1/houses';
    mockOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      } 
    };
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve(
           mockHouse
          )
        }
      })
    });
  });

  it('should call fetch with the correct params', () => {
    const expected = [mockUrl, mockOptions];
    getHouses();
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should return an array of houses', async () => {
    const expected = mockHouse;
    const results = await getHouses();
    expect(results).toEqual(expected);
  });

  it('should throw an error on bad fetch', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        status: 404,
        message: 'FAIL'  
      })
    });
    const expected = 'FAIL';
    const results = getHouses();
    expect(results).rejects.toEqual(expected);
  });
});