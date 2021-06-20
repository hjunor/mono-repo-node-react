import {
  Container,
  WrapperImg,
  ButtonLink,
  Card,
  WrapperLeft,
  WrapperRight,
} from './styles';
import Tilt from 'react-tilt';

import frame from '../../Assets/frame2.jpg';
import { useContext } from 'react';
import { UserContext } from '../../store/userContext';

const Home = () => {
  const { login } = useContext(UserContext);

  return (
    <Container>
      <WrapperImg>
        <WrapperLeft>
          <span>Lugar onde sua Arte tem valor</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium quam totam officiis sapiente dolorem, nobis
            reprehenderit fugit placeat reiciendis iste! Expedita quasi quo
            culpa neque autem delectus, ullam commodi eveniet.
          </p>
          {login ? (
            <ButtonLink to="/dash">Painel</ButtonLink>
          ) : (
            <ButtonLink to="/conta/sign-up"> Criar conta</ButtonLink>
          )}
        </WrapperLeft>
        <WrapperRight>
          <Tilt
            className="Tilt"
            options={{ max: 25 }}
            style={{ height: 400, width: 300 }}
          >
            <Card>
              <img src={frame} className="Tilt-inner" alt="frame" />
            </Card>
          </Tilt>
        </WrapperRight>
      </WrapperImg>
    </Container>
  );
};

export { Home };
