import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import Input from '../../../components/UI/Input';
import { useForm } from '../../../hooks/useForm';
import { UserContext } from '../../../store/userContext';
import { Container, StylesTitle, StylesButton, StylesLink } from '../styles';

export default function FormLogin() {
  const { userLogin, error, login, setError, loading } =
    useContext(UserContext);

  const email = useForm('email');
  const password = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    if (email.validate() && password.validate()) {
      userLogin(email.value, password.value);
    }
  }

  if (login) {
    return <Navigate to="/account" />;
  }

  return (
    <Container height="50vh" className="animeLeft">
      <div>
        <StylesTitle left="70px">Login</StylesTitle>

        <form onSubmit={handleSubmit}>
          <Input label="email" type="email" name="email" {...email} />
          <Input label="senha" type="password" name="password" {...password} />
          {loading ? (
            <StylesButton
              style={{ cursor: 'wait', opacity: 0.3 }}
              disabled
              type="submit"
            >
              Aguarde
            </StylesButton>
          ) : (
            <StylesButton type="submit">Entrar</StylesButton>
          )}
          {error && (
            <h1 style={{ color: '#cb567a', marginTop: '30px' }}>
              {error.login}
            </h1>
          )}
        </form>
      </div>
      <div>
        Ainda não tem conta? Que tal
        <StylesLink
          onClick={() => setError(false)}
          color="#f5f5f5"
          background="#56b5d0"
          to="/conta/sign-up"
        >
          criar uma conta
        </StylesLink>
      </div>
    </Container>
  );
}
