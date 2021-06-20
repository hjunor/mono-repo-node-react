import axios from 'axios';
import { getToken } from './token';

export const getApiUrl = (path) => {
  return `http://localhost:3003${path}`;
};

export const getheaders = () => {
  const token = getToken();
  if (!token) return {};

  return {
    Authorization: `Bearer ${token}`,
  };
};

export const apiGetNoCache = (path) => {
  const url = getApiUrl(path);
  const options = {
    headers: getheaders(),
    cache: 'no-store',
  };
  return axios.get(url, options);
};
export const apiPost = (path, data = {}) => {
  const url = getApiUrl(path);
  const options = {
    headers: getheaders(),
  };

  return axios.post(url, data, options);
};

export const apiUpload = (path, data = {}) => {
  const token = getToken();

  const url = getApiUrl(path);
  const options = {
    headers: {
      'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      Authorization: `Bearer ${token}`,
      cache: 'no-store',
    },
  };

  return axios.post(url, data, options);
};

export const apiPut = (path, data = {}) => {
  const url = getApiUrl(path);
  const options = {
    headers: getheaders(),
  };
  return axios.put(url, data, options);
};

export const apiGet = (path) => {
  const url = getApiUrl(path);
  const options = {
    headers: getheaders(),
  };
  return axios.get(url, options);
};
