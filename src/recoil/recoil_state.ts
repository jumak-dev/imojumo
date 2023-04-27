import { atom } from 'recoil';

const userInfoAtom = atom({
  key: 'useInfoAtom',
  default: {
    email: null,
    token: null,
    username: null,
    bio: null,
    image: null,
  },
});

export default userInfoAtom;
