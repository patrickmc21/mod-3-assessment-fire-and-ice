import { swornMember } from '../../../mockData';

const getSwornMember = jest.fn().mockImplementation(() => {
  return Promise.resolve(swornMember);
});

export default getSwornMember;