import React, { useContext, useState } from 'react';
import { apiPut } from '../../helpers/api';
import { UserContext } from '../../store/userContext';

import {
  Container,
  StylesName,
  StylesDesc,
  Icon,
  StylesExclusive,
  StylesButton,
  StylesWrapperButton,
  StylesFlex,
  StylesWrapper,
  StylesArea,
  StylesBold,
  StylesStatus,
  StylesText,
} from './styles';

function CardModal({
  img,
  name,
  description,
  aproved,
  exclusivity,
  id,
  setModal,
}) {
  const { artListAdm } = useContext(UserContext);

  const [input, setInput] = useState(false);
  const [textArea, setTextArea] = useState(null);

  async function aprovedArt() {
    await apiPut(`/arts/${id}`, {
      aproved: true,
      reason: null,
    });

    setInput(false);
    setModal(null);
    artListAdm();
  }
  async function reprovedArt() {
    await apiPut(`/arts/${id}`, {
      aproved: false,
      reason: textArea,
    });
    setInput(false);
    setModal(null);
    artListAdm();
  }
  const aprovedStatus = (value) => {
    if (value === true) {
      return 'Aprovado';
    } else if (value === false) {
      return 'Reprovado';
    } else {
      return 'Em Avaliação';
    }
  };

  return (
    <>
      <Container>
        <StylesFlex>
          <a target="_blank" rel="noreferrer" href={img}>
            <Icon></Icon>
          </a>
          <StylesWrapper>
            <StylesName>
              <StylesBold>Name:</StylesBold> {name}
            </StylesName>
            <StylesDesc>
              <StylesBold>Descrição:</StylesBold> {description}
            </StylesDesc>
            <StylesStatus aproved={aproved}>
              {aprovedStatus(aproved)}
            </StylesStatus>
            <StylesExclusive exclusivity={exclusivity}>ex</StylesExclusive>
            <StylesWrapperButton>
              <StylesButton
                color="#e0e0e0"
                background="#29A377"
                onClick={aprovedArt}
              >
                Aprovar
              </StylesButton>
              <StylesButton
                color="#e0e0e0"
                background="#cd537a"
                onClick={() => setInput(true)}
              >
                Reprovar
              </StylesButton>
            </StylesWrapperButton>
          </StylesWrapper>
        </StylesFlex>

        {input ? (
          <StylesArea>
            <StylesText>Escreva o motivo da reprovação:</StylesText>
            <textarea
              onChange={({ target }) => setTextArea(target.value)}
              name="reason"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <StylesWrapperButton>
              <StylesButton
                color="#e0e0e0"
                background="#29A377"
                onClick={reprovedArt}
              >
                Enviar
              </StylesButton>
              <StylesButton
                color="#e0e0e0"
                background="#cd537a"
                onClick={() => setInput(false)}
              >
                Cancelar
              </StylesButton>
            </StylesWrapperButton>
          </StylesArea>
        ) : (
          <br />
        )}
      </Container>
    </>
  );
}

export default CardModal;
