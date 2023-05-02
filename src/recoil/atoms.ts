import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

interface UserInfo {
  avatarUrl: string | null;
  role: string | null;
  username: string | null;
}

const { persistAtom: persistUserInfoAtom } = recoilPersist({
  key: 'recoil-user', // this key is using to store data in local storage
  storage: localStorage, // configurate which stroage will be used to store the data
});

const { persistAtom: persistJwtAtom } = recoilPersist({
  key: 'recoil-jwt',
  storage: localStorage,
});

type JWT = string;

export const userInfoAtom = atom<UserInfo>({
  key: 'useInfoAtom',
  default: {
    avatarUrl: null,
    role: null,
    username: null,
  },
  effects_UNSTABLE: [persistUserInfoAtom],
});

export const jwtAtom = atom<JWT | null>({
  key: 'jwtAtom',
  default: null,
  effects_UNSTABLE: [persistJwtAtom],
});
