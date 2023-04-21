import { atom } from 'recoil';

const userInfo = atom({
  key: 'useInfoAtom',
  default: {
    username: null,
    avatarUrl: null,
    role: null,
  },
});

export default userInfo;
