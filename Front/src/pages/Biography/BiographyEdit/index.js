import React, { useContext, useState } from 'react';
import { UserContext } from '../../../store/userContext';

import profile from '../../../Assets/profile.png';

import { Container, Input } from './styles';

function BiographyEdit() {
  const { bio, bank, user, bankPost, bioPost } = useContext(UserContext);

  const [img, setImg] = useState(null);

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  function handleSubmitBio(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData);

    const upload = new FormData();

    upload.append('facebook', data.facebook);
    upload.append('instagram', data.instagram);
    upload.append('bithDate', data.bithDate);
    upload.append('portifolioLink', data.portifolioLink);
    upload.append('resumer', data.resumer);

    upload.append('photo', img.raw, img.raw.name);
    bioPost(upload);
    console.log(upload);
  }

  function handleSubmitBank(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData);

    const upload = new FormData();
    upload.append('name', data.name);
    upload.append('agency', data.agency);
    upload.append('account', data.account);
    upload.append('owner', data.owner);
    upload.append('type', data.type);
    upload.append('doc', data.doc);

    bankPost(upload);

    console.log(upload);
  }

  return (
    <Container>
      <form className="card" onSubmit={handleSubmitBio}>
        <img src={bio.photo ? bio.photo : profile} alt="profile" />
        <label>{user.username}</label>
        <Input
          value={bio.photo}
          width="90%"
          height="12px"
          name="photo"
          type="file"
          placeholder="Photo de perfil"
          onChange={handleImgChange}
        />
        <Input
          value={bio.facebook}
          width="90%"
          height="12px"
          name="facebook"
          type="text"
          placeholder="Facebook"
        />
        <Input
          value={bio.instagram}
          width="90%"
          height="12px"
          name="instagram"
          type="text"
          placeholder="Instagram"
        />{' '}
        <Input
          value={bio.bithDate}
          width="90%"
          height="12px"
          name="bithDate"
          type="date"
          placeholder="Data de aniversario"
        />
        <Input
          value={bio.portifolioLink}
          width="90%"
          height="12px"
          name="portifolioLink"
          type="text"
          placeholder="Link Portfólio"
        />
        <Input
          value={bio.portifolioLink}
          width="90%"
          height="12px"
          name="resumer"
          type="text"
          placeholder="Me diga mais sobre você!"
        />
        <button type="submit">enviar</button>
      </form>
      <form className="card" onSubmit={handleSubmitBank}>
        <label htmlFor="bank">Informações Bancarias</label>
        <Input
          value={bank.name}
          id="bank"
          width="90%"
          height="12px"
          name="name"
          type="text"
          placeholder="Banco"
        />{' '}
        <Input
          value={bank.agency}
          width="90%"
          height="12px"
          name="agency"
          type="text"
          placeholder="Agencia"
        />{' '}
        <Input
          value={bank.account}
          width="90%"
          height="12px"
          name="account"
          type="text"
          placeholder="Número da conta"
        />{' '}
        <Input
          value={bank.owner}
          width="90%"
          height="12px"
          name="owner"
          type="text"
          placeholder="Proprietario"
        />{' '}
        <Input
          value={bank.type}
          width="90%"
          height="12px"
          name="type"
          type="text"
          placeholder="Tipo"
        />
        <Input
          value={bank.doc}
          width="90%"
          height="12px"
          name="doc"
          type="text"
          placeholder="Doc"
        />
        <button type="submit">enviar</button>
      </form>
    </Container>
  );
}

export default BiographyEdit;
