import {
  Container,
  StylesDesc,
  StylesName,
  StylesStatus,
  Icon,
  StylesButton,
  StylesRight,
  StylesSpan,
  StylesExclusive,
} from './styles';

const CardAdm = ({
  id,
  name,
  img,
  description,
  aproved,
  exclusivity,
  setModal,
}) => {
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
        <a target="_blank" rel="noreferrer" href={img}>
          <Icon />
        </a>
        <StylesRight>
          <StylesName>Name: {name} </StylesName>
          <StylesDesc>Descrição: {description}</StylesDesc>
          <StylesSpan>
            <div>
              <StylesExclusive exclusivity={exclusivity}>ex</StylesExclusive>
              <StylesStatus aproved={aproved}>
                {aprovedStatus(aproved)}
              </StylesStatus>
            </div>
            <StylesButton
              onClick={(e) =>
                setModal({
                  id,
                  name,
                  img,
                  description,
                  aproved,
                  exclusivity,
                })
              }
            >
              Revisar
            </StylesButton>
          </StylesSpan>
        </StylesRight>
      </Container>
    </>
  );
};

export default CardAdm;
