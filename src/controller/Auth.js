const User = require('../models/Users');
const Biography = require('../models/Biography');
const Bankinfo = require('../models/Bankinfo');
const bcrypt = require('bcrypt');
const { generateJwt } = require('../helpers/jwt');
const { isCpf } = require('iscpf');

const rounds = 10;

class AuthController {
  async create(req, res) {
    try {
      const { username, email, password, cpf } = req.body;

      if (!isCpf(cpf)) {
        return res.status(400).json({ error: { message: 'CPF invalido' } });
      }

      const cpfExist = await User.findOne({ where: { cpf } });

      const userExist = await User.findOne({ where: { email } });

      if (!!userExist || cpfExist) {
        return res
          .status(400)
          .json({ error: { message: 'Usuário ja cadastrado.' } });
      }
      const hash = bcrypt.hashSync(password, rounds);

      const bio = await Biography.create();
      const bank = await Bankinfo.create();
      const user = await User.create({
        username,
        email,
        password: hash,
        cpf,
        biographyId: bio.id,
        bankinfoId: bank.id,
      });
      const token = generateJwt({ id: user.id });

      return res.status(201).json({ data: { user, token, bank, bio } });
    } catch (error) {
      return res.status(500).json({ error: { message: 'error server' } });
    }
  }
  async index(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res
          .status(400)
          .json({ error: { message: 'Usuário não cadastrado.' } });
      }

      const { bankinfoId, biographyId } = user;

      const biography = await Biography.findOne({ biographyId });
      const bank = await Bankinfo.findOne({ bankinfoId });

      const match = user ? bcrypt.compareSync(password, user.password) : null;

      if (!match) {
        return res.status(400).json({ error: { message: 'Senha incorreta' } });
      }

      const token = generateJwt({
        id: user.id,
        biography: biography.id,
        bank: bank.id,
      });

      return res.status(200).json({ data: { user, token, biography, bank } });
    } catch (error) {
      return res.status(500).json({ error: { message: 'error server' } });
    }
  }
  async store(req, res) {
    try {
      const { id } = req;
      const users = await User.findOne({ where: { id } });
      return res.status(200).json({ data: { users } });
    } catch (error) {
      return res.status(500).json({ error: { message: 'error server' } });
    }
  }
}

module.exports = new AuthController();
