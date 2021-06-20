import React, { useContext } from 'react';
import Input from '../../../components/UI/Input';
import { useForm } from '../../../hooks/useForm';
import { UserContext } from '../../../store/userContext';
import { Container, StylesTitle, StylesButton, StylesLink } from '../styles';

export default function FormSignUp() {
  const { userCreate, error, message, setError } = useContext(UserContext);

  const username = useForm();
  const password = useForm('password');
  const password_confirmation = useForm('password');
  const email = useForm('email');
  const cpf = useForm('cpf');
  function handleSubmit(e) {
    console.log(password.value, password_confirmation.value);
    e.preventDefault();
    if (password.validate() && email.validate() && cpf.validate()) {
      userCreate({
        username: username.value,
        password: password.value,
        password_confirmation: password_confirmation.value,
        cpf: cpf.value,
        email: email.value,
      });
    }
  }
  return (
    <Container height="60vh" className="animeLeft">
      <form onSubmit={handleSubmit}>
        <StylesTitle left="150px">Criar conta</StylesTitle>
        <Input label="Username" type="text" name="ursername" {...username} />
        <Input label="Email" type="text" name="email" {...email} />
        <Input label="CPF" type="text" name="cpf" {...cpf} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Input
          label="Confirmar Senha"
          type="password"
          name="password"
          {...password_confirmation}
        />
        <StylesButton type="submit">criar</StylesButton>
        {error && <h1 style={{ color: '#cb567a' }}>{error.signUp}</h1>}
        {message && (
          <h1 style={{ color: '#56b5d0', marginTop: '30px' }}>
            {message.signUp}
          </h1>
        )}
      </form>
      <span>
        Já tem conta? fazer
        <StylesLink
          onClick={() => setError(false)}
          color="#f5f5f5"
          background="#56b5d0"
          to="/conta/"
        >
          Login
        </StylesLink>
      </span>
    </Container>
  );
}
