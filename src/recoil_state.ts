import { atom } from 'recoil';

const userInfo = atom({
  key: 'useInfoAtom',
  default: false,
});

export default userInfo;
