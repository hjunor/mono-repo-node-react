import React, { useContext, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { apiGet } from '../../helpers/api';
import { UserContext } from '../../store/userContext';

function LoginRouter({ path, element }) {
  const { login, setAdm } = useContext(UserContext);

  const [admin, setAdmin] = useState(async () => {
    try {
      const { data } = await apiGet('/admin');
      const { token } = data;
      if (token === true) {
        return setAdmin(true);
      } else {
        return setAdmin(false);
      }
    } catch (error) {
      if (error.response?.data) {
        setAdmin(false);
        setAdm(false);
      }
    }
  });
  setAdm(admin);
  if (admin === true && login) return <Navigate to="/dash" />;

  if (login) return <Route path={path} element={element} />;
}

export default LoginRouter;
