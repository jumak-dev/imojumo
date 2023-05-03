import { selector } from 'recoil';
import { jwtAtom } from './atoms';

const isLoginSelector = selector({
  key: 'isLoginSelector',
  get: ({ get }) => {
    const jwt = get(jwtAtom);
    return !!jwt;
  },
});

export default isLoginSelector;
