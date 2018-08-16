export const API = {
  USERS: {
    LOGIN: '/access-tokens',
    LOGOUT: '/access-tokens',
    SIGNUP: '/users',
    ME: '/me',
    REFRESH: '/access-tokens/refresh',
  },
  IDEAS: {
    CREATE: '/ideas',
    DELETE: '/ideas/',
    UPDATE: '/ideas/',
    GET: '/ideas',
  },
};

export { API as default };
