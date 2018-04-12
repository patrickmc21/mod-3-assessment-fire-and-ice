import getSwornMember from '../getSwornMember';
import { swornMember } from '../../../mockData';


describe('getSwornMember', () => {

  let mockUrl;
  let mockOptions;

  beforeEach(() => {
    mockUrl = 'http://localhost:3001/api/v1/character/1';
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
          return Promise.resolve(swornMember);
        }
      });
    });
  });

  it('should call fetch with correct params', () => {
    const expected = [mockUrl, mockOptions];
    getSwornMember(1);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should return a swornMember', async () => {
    const expected = swornMember;
    const results = await getSwornMember(1);
    expect(results).toEqual(expected);
  });

  it('should throw an error on bad fetch', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        status: 404,
        message: 'FAIL'
      });
    });

    const expected = 'FAIL';
    const results = getSwornMember(1);
    expect(results).rejects.toEqual(expected);
  });
});