import { mockHouse } from '../../../mockData';

const getHouses = jest.fn().mockImplementation(() => {
  return Promise.resolve(mockHouse);
});

export default getHouses;