import React, { createContext, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { apiGet, apiGetNoCache, apiPost, apiUpload } from '../helpers/api';
import {
  getAccount,
  getToken,
  removeAccount,
  removeToken,
  setAccount,
  setToken,
} from '../helpers/token';

export const UserContext = createContext();

const { Provider } = UserContext;

export const UserStorage = ({ children }) => {
  const [adm, setAdm] = useState(null);
  const [art, setArt] = useState([]);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);
  const [login, setLogin] = useState(null);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // eslint-disable-next-line
  const [bio, setBio] = useState(null);
  // eslint-disable-next-line
  const [bank, setBank] = useState(null);
  const navigate = useNavigate();

  const userLogout = useCallback(async () => {
    setUser(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    removeToken();
    removeAccount();
    navigate('/conta');
  }, [navigate]);

  async function artPost(body) {
    try {
      setLoading(true);
      const data = await apiUpload('/arts', body);
      if (data) navigate('/conta/artes');
    } catch (error) {
      if (error.response?.data) {
        setError('Error');
      }
      const { data } = error.response;

      setError(data.error.message);
    } finally {
      setLoading(false);
    }
  }

  async function bioPost(body) {
    try {
      setLoading(true);
      const data = await apiUpload('/biography', body);
      console.log(data);
      if (data) navigate('/conta/biografia');
    } catch (error) {
      if (error.response?.data) {
        setError('Error');
      }
      const { data } = error.response;

      setError(data.error.message);
    } finally {
      setLoading(false);
    }
  }

  async function bankPost(body) {
    try {
      setLoading(true);
      const data = await apiUpload('/bank', body);

      console.log(data);
      if (data) navigate('/conta/biografia');
    } catch (error) {
      if (error.response?.data) {
        setError('Error');
      }
      const { data } = error.response;

      setError(data.error.message);
    } finally {
      setLoading(false);
    }
  }

  async function artList() {
    try {
      setLoading(true);
      const { data } = await apiGet('/arts');

      setArt(data);
    } catch (error) {
      if (error.response?.data) {
        setError('Error');
      }
      const { data } = error.response;

      setError(data.error.message);
    } finally {
      setLoading(false);
    }
  }
  async function artListAdm() {
    try {
      setLoading(true);
      const { data } = await apiGetNoCache('/admin/arts');
      setArt(data);
    } catch (error) {
      if (!error.response) {
        setError('Error servidor');
      } else {
        const { data } = error.response;
        setError(data.error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  async function userLogin(email, password) {
    try {
      setLoading(true);
      setError(false);
      const { data } = await apiPost('/login', {
        email,
        password,
      });

      const { token, user, biography, bank } = await data;

      setLogin(true);
      setUser(user);
      setBio(biography);
      setBank(bank);

      setAccount(user);
      setToken(token);
      navigate('/account');
    } catch (error) {
      if (!error.response) {
        setError({ login: 'Error servidor' });
      } else {
        const { data } = error.response;
        setError({ login: data.error.message });
      }
    } finally {
      setLoading(false);
    }
  }

  async function userCreate(body) {
    try {
      setError(false);
      setLoading(true);
      const { data } = await apiPost('/sign-up', body);
      console.log(data);
      if (data)
        setMessage({ signUp: 'Conta criada com sucesso! verifique o email.' });
    } catch (error) {
      const { data } = error.response;
      setError({ signUp: data.error.message });
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    async function autoLogin() {
      const token = getToken();
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { data } = await apiGet('/token');
          if (data?.error) {
            userLogout();
            removeAccount();
            navigate('/');
          }
          setUser(getAccount());
          setLogin(true);
          navigate('/dash');
        } catch (err) {
          setError('Requisição invalida...');
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin(); // eslint-disable-next-line
  }, []);

  return (
    <Provider
      value={{
        user,
        art,
        setUser,
        setArt,
        setError,
        userLogin,
        loading,
        error,
        login,
        userLogout,
        userCreate,
        artPost,
        artList,
        adm,
        setAdm,
        artListAdm,
        message,
        bio,
        bank,
        bankPost,
        bioPost,
      }}
    >
      {children}
    </Provider>
  );
};
