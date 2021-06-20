import { Container, Label, InputValue, Error } from './styles';

function Input({
  type,
  label,
  value,
  name,
  onChange,
  error,
  onBlur,
  width,
  height,
  background,
}) {
  return (
    <Container>
      <Label htmlFor={name}></Label>

      <InputValue
        placeholder={label}
        id={name}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        width={width}
        height={height}
        background={background}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}

export default Input;
