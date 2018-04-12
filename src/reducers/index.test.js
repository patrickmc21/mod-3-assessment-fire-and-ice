import rootReducer from './root-reducer';

describe('rootReducer', () => {
  it('should match the snapshot', () => {
    expect(rootReducer).toMatchSnapshot();
  });
});