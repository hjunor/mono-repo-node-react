require('dotenv').config();
const HTML_ART_CREATE = require('./templates/artCreate');
const HTML_USER_CREATE = require('./templates/userCreate');
const HTML_VERIFY_USER = require('./templates/verifyUser');
const HTML_UPLOAD_ART = require('./templates/uploadArt');
const HTML_WELCOME_USER = require('./templates/welcomeUser');
const HTML_APROVED_USER = require('./templates/aprovedArt');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.MAIL_KEY);

async function sendMail(type, data) {
  const { email } = await data;
  let msg;
  switch (type) {
    case 'create_art':
      msg = {
        to: 'junorbazas@gmail.com',
        from: 'hjunor@gmail.com',
        subject: 'Arte criada',
        html: HTML_ART_CREATE(data),
      };
      break;
    case 'create_user':
      msg = {
        to: 'junorbazas@gmail.com',
        from: 'hjunor@gmail.com',
        subject: 'Novo usuário criado.',
        html: HTML_USER_CREATE(data),
      };
      break;
    case 'verify_user':
      msg = {
        to: email,
        from: 'hjunor@gmail.com',
        subject: 'Verificação de email.',
        html: HTML_VERIFY_USER(data),
      };
      break;
    case 'upload_art':
      msg = {
        to: email,
        from: 'hjunor@gmail.com',
        subject: 'Nova arte para avaliação',
        html: HTML_UPLOAD_ART(data),
      };
      break;
    case 'aproved_art':
      msg = {
        to: email,
        from: 'hjunor@gmail.com',
        subject: 'Arte Avaliada!!!',
        html: HTML_APROVED_USER(data),
      };
      break;
    default:
      break;
  }

  return await sgMail.send(msg);
}

module.exports = sendMail;
