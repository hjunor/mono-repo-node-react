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
import imgCreate from '../../Assets/card2.jpg';
import imgInfo from '../../Assets/card1.jpg';
const Account = () => {
  return (
    <Container>
      <StylesContainer>
        <StylesCard className="animeLeft">
          <StylesContent>
            <StylesImg src={imgCreate}></StylesImg>
          </StylesContent>
          <StylesContentText>
            <StylesText>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
              quo accusantium deleniti error enim? Sunt facilis voluptatem earum
              dolorem nobis.
            </StylesText>
            <ButtonLink to="/conta/criar">Enviar</ButtonLink>
          </StylesContentText>
        </StylesCard>

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
            <ButtonLink to="/conta/artes">Suas Artes</ButtonLink>
          </StylesContentText>
        </StylesCard>

        <StylesCard className="animeLeft">
          <StylesContent>
            <StylesImg src={imgInfo}></StylesImg>
          </StylesContent>
          <StylesContentText>
            <StylesText>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
              quo accusantium deleniti error enim? Sunt facilis voluptatem earum
              dolorem nobis.
            </StylesText>
            <ButtonLink to="/conta/biografia">Biografia</ButtonLink>
          </StylesContentText>
        </StylesCard>
      </StylesContainer>
    </Container>
  );
};

export { Account };
