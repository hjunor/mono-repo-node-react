import React from 'react';

import {
  Container,
  StylesContainer,
  StylesCard,
  StylesImg,
  StylesContent,
  StylesText,
  ButtonLink,
  StylesContentText,
} from './styles';
import imgArt from '../../Assets/card.jpg';
const Dash = () => {
  return (
    <Container>
      <StylesContainer>
        <StylesCard className="animeLeft">
          <StylesContent>
            <StylesImg src={imgArt}></StylesImg>
          </StylesContent>
          <StylesContentText>
            <StylesText>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
              quo accusantium deleniti error enim? Sunt facilis voluptatem earum
              dolorem nobis.
            </StylesText>
            <ButtonLink to="/dash/artes">Gerenciar Artes</ButtonLink>
          </StylesContentText>
        </StylesCard>
      </StylesContainer>
    </Container>
  );
};

export { Dash };
