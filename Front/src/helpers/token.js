import { getCookie, removeCookie, setCookie } from './cookies';

const expires = new Date();
expires.setFullYear(expires.getFullYear() + 1);

const options = { expires };

export const COOKIE_TOKEN = 'tk';
export const COOKIE_ACCOUNT = 'user';
export const COOKIE_BIO = 'bio';
export const COOKIE_BANK = 'bank';

export const getAccount = () => getCookie(COOKIE_ACCOUNT, options);
export const removeAccount = () => removeCookie(COOKIE_ACCOUNT, options);
export const setAccount = (account) => {
  setCookie(COOKIE_ACCOUNT, account, options);
};
export const getBio = () => getCookie(COOKIE_BIO, options);
export const removeBio = () => removeCookie(COOKIE_BIO, options);
export const setBio = (account) => {
  setCookie(COOKIE_BIO, account, options);
};
export const getBank = () => getCookie(COOKIE_BANK, options);
export const removeBank = () => removeCookie(COOKIE_BANK, options);
export const setBank = (account) => {
  setCookie(COOKIE_BANK, account, options);
};

export const setToken = (token) => setCookie(COOKIE_TOKEN, token, options);
export const getToken = () => getCookie(COOKIE_TOKEN, options);
export const removeToken = () => removeCookie(COOKIE_TOKEN, options);
