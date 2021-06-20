import React from "react";

import {
  Container,
  StylesDesc,
  StylesImg,
  StylesName,
  StylesStatus,
  StylesBold,
} from "./styles";

const CardArt = ({ name, img, description, aproved, reason }) => {
  const aprovedStatus = (value) => {
    if (value === true) {
      return "Aprovado";
    } else if (value === false) {
      return "Reprovado";
    } else {
      return "Em Avaliação";
    }
  };

  return (
    <Container>
      <StylesImg src={img} />
      <div>
        <StylesName>
          <StylesBold>Name:</StylesBold> {name}{" "}
        </StylesName>
        <StylesDesc>
          <StylesBold>Descrição:</StylesBold> {description}
        </StylesDesc>
        {reason && (
          <StylesDesc>
            <StylesBold>Motivo da reprovação:</StylesBold> {reason}
          </StylesDesc>
        )}
        <StylesStatus aproved={aproved}>{aprovedStatus(aproved)}</StylesStatus>
      </div>
    </Container>
  );
};

export default CardArt;
