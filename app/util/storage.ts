import { User } from '~/features/auth/type';

const USER = 'user';

// ユーザー情報を保存
export const userStorage = {
  get: (): User => {
    return JSON.parse(window.localStorage.getItem(USER) as string);
  },
  set: (user: User) => {
    window.localStorage.setItem(USER, JSON.stringify(user));
  },
  remove: () => {
    window.localStorage.removeItem(USER);
  },
};
