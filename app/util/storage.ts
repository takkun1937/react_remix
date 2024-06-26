const USER = 'user';

// ユーザー情報を保存
export const userStorage = {
  get: (): {} => {
    return JSON.parse(window.localStorage.getItem(USER) as string);
  },
  set: (user: {}) => {
    window.localStorage.setItem(USER, JSON.stringify(user));
  },
  remove: () => {
    window.localStorage.removeItem(USER);
  },
};
