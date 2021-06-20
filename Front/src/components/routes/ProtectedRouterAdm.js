import React, { useContext, useState } from "react";
import { Route, Navigate } from "react-router-dom";
import { apiGet } from "../../helpers/api";
import { UserContext } from "../../store/userContext";

function ProtectedRouterAdm({ path, element }) {
  const { login, setAdm } = useContext(UserContext);

  const [adm, setAdmin] = useState(async () => {
    try {
      const { data } = await apiGet("/admin");
      const { token } = data;

      if (token === true) return setAdmin(true);
      return false;
    } catch (error) {
      if (error.response?.data) {
        setAdmin(false);
      }
    }
  });

  setAdm(adm);
  if (login && adm) return <Route path={path} element={element} />;

  return <Navigate to="/" />;
}

export default ProtectedRouterAdm;
