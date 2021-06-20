import React, { useContext, useState } from 'react';
import { UserContext } from '../../store/userContext';

import {
  Container,
  Input,
  StylesPreview,
  StylesSelect,
  StylesButton,
  StylesLabel,
} from './styles';

function CreateArt() {
  const { artPost, error } = useContext(UserContext);
  const [img, setImg] = useState(null);
  function hamdleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData);

    const exclusivity = !!parseInt(data.exclusivity);

    const upload = new FormData();

    upload.append('typesId', data.types);
    upload.append('categoryId', data.category);
    upload.append('name', data.name);
    upload.append('description', data.description);
    upload.append('file', img.raw, img.raw.name);
    upload.append('exclusivity', exclusivity);

    artPost(upload);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <Container>
      <form
        onSubmit={hamdleSubmit}
        style={{ display: 'flex', flexDirection: 'column', width: '50%' }}
      >
        <StylesLabel>Imagem</StylesLabel>
        <input name="img" type="file" onChange={handleImgChange} />
        <StylesLabel>Nome</StylesLabel>

        <Input
          width="95%"
          height="12px"
          name="name"
          type="text"
          placeholder="nome"
        />
        <StylesLabel>Descrição</StylesLabel>

        <Input
          width="95%"
          height="12px"
          name="description"
          type="text"
          placeholder="descrição"
        />
        <StylesLabel>Tipo</StylesLabel>

        <StylesSelect name="types">
          <option value="1">100% Autoral</option>
          <option value="2">Editado</option>
          <option value="3">Composição</option>
          <option value="4">Outros</option>
        </StylesSelect>
        <StylesLabel>Exclusivo</StylesLabel>

        <StylesSelect name="exclusivity">
          <option value={1}>sim</option>
          <option value={0}>não</option>
        </StylesSelect>
        <StylesLabel>Categoria</StylesLabel>

        <StylesSelect name="category">
          <option value="1">Animais</option>
          <option value="2">Caveiras</option>
          <option value="3">Fashion</option>
          <option value="4">Figurativos</option>
          <option value="5">Types</option>
          <option value="6">Infantil</option>
        </StylesSelect>

        <StylesButton>enviar</StylesButton>
        <h1 style={{ color: '#fff' }}>{error && error}</h1>
      </form>
      {img && (
        <StylesPreview
          style={{ backgroundImage: `url('${img.preview}')` }}
        ></StylesPreview>
      )}
    </Container>
  );
}

export default CreateArt;
