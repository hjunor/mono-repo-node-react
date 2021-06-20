import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { UserContext } from '../../store/userContext';

import FormLogin from './FormLogin';
import FormSignUp from './FormSingUp';

import { Section, FormStyles } from './styles';

function Login() {
  const { login } = useContext(UserContext);

  if (login) {
    return <Navigate to="/" />;
  }
  return (
    <Section>
      <FormStyles>
        <Routes>
          <Route path="/" element={<FormLogin />}></Route>
          <Route path="sign-up" element={<FormSignUp />}></Route>
        </Routes>
      </FormStyles>
    </Section>
  );
}
export { Login };
