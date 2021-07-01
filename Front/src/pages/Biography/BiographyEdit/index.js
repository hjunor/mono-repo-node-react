import React, { useContext, useState } from 'react';
import { UserContext } from '../../../store/userContext';

import profile from '../../../Assets/profile.png';

import { Container, Input } from './styles';

function BiographyEdit() {
  const { bio, bank, user, bankPost, bioPost } = useContext(UserContext);
  console.log(bio);
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
    upload.append('file', img.raw, img.raw.name);

    bioPost(upload);
  }

  function handleSubmitBank(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData);

    bankPost({
      name: data.name ? data.name : bank.name,
      type: data.type ? data.type : bank.type,
      agency: data.agency ? data.agency : bank.agency,
      account: data.account ? data.account : bank.account,
      owner: data.owner ? data.owner : bank.owner,
      doc: data.doc ? data.doc : bank.doc,
    });
  }

  return (
    <Container>
      <form className="card" onSubmit={handleSubmitBio}>
        <img src={bio?.photo ? bio.photo : profile} alt="profile" />
        <label>{user.username}</label>
        <Input
          width="90%"
          height="12px"
          name="photo"
          type="file"
          placeholder={bio?.photo ? bio.photo : 'Photo de perfil'}
          onChange={handleImgChange}
        />
        <Input
          width="90%"
          height="12px"
          name="facebook"
          type="text"
          placeholder={bio?.facebook ? bio.facebook : 'Facebook'}
        />
        <Input
          width="90%"
          height="12px"
          name="instagram"
          type="text"
          placeholder={bio?.instagram ? bio.instagram : 'Instagram'}
        />
        <Input
          value={bio?.bithDate && bio.bithDate}
          width="90%"
          height="12px"
          name="bithDate"
          type="date"
          placeholder={bio?.bithDate ? bio.bithDate : 'Data de aniversario'}
        />
        <Input
          width="90%"
          height="12px"
          name="portifolioLink"
          type="text"
          placeholder={
            bio?.portifolioLink ? bio.portifolioLink : 'Link Portfólio'
          }
        />
        <Input
          width="90%"
          height="12px"
          name="resumer"
          type="text"
          placeholder={bio?.resumer ? bio.resumer : 'Me diga mais sobre você!'}
        />
        <button type="submit">enviar</button>
      </form>
      <form className="card" onSubmit={handleSubmitBank}>
        <label htmlFor="bank">Informações Bancarias</label>
        <Input
          id="bank"
          width="90%"
          height="12px"
          name="name"
          type="text"
          placeholder={bank?.name ? bank.name : 'Banco'}
        />
        <Input
          width="90%"
          height="12px"
          name="agency"
          type="text"
          placeholder={bank?.agency ? bank.agency : 'Agência'}
        />
        <Input
          width="90%"
          height="12px"
          name="account"
          type="text"
          placeholder={bank?.account ? bank.account : 'Número da conta'}
        />
        <Input
          width="90%"
          height="12px"
          name="owner"
          type="text"
          placeholder={bank?.owner ? bank.owner : 'Proprietario'}
        />
        <Input
          width="90%"
          height="12px"
          name="type"
          type="text"
          placeholder={bank?.type ? bank.type : 'Tipo'}
        />
        <Input
          width="90%"
          height="12px"
          name="doc"
          type="text"
          placeholder={bank?.doc ? bank.doc : 'Doc'}
        />
        <button type="submit">enviar</button>
      </form>
    </Container>
  );
}

export default BiographyEdit;
