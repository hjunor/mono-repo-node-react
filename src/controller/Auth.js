const User = require("../models/Users");
const Biography = require("../models/Biography");
const bcrypt = require("bcrypt");
const { generateJwt } = require("../helpers/jwt");

const rounds = 10;

class Auth {
  async create(req, res) {
    try {
      const { username, email, password, cpf } = req.body;

      const userExist = await User.findOne({ where: { email } });
      console.log(userExist);

      if (!!userExist) {
        return res.status(400).json({ message: "Usuário não existe" });
      }
      const hash = bcrypt.hashSync(password, rounds);

      const { id } = await Biography.create();

      const user = await User.create({
        username,
        email,
        password: hash,
        cpf,
        biographyId: id,
      });
      const token = generateJwt({ id: user.id });

      return res.status(201).json({ data: user, token });
    } catch (error) {
      return res.status(500).json({ message: "error server" });
    }
  }
  async index(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(400).json({ message: "Usuário ja cadastrado" });
      }

      const match = user ? bcrypt.compareSync(password, user.password) : null;

      if (!match) {
        return res.status(400).json({ message: "Senha incorreta" });
      }
      const token = generateJwt({ id: user.id });

      return res.status(201).json({ data: user, token });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "error server" });
    }
  }

  async store(req, res) {
    try {
      const { id } = req;
      console.log(id);
      const users = await User.findOne({ where: { id } });
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "error server" });
    }
  }
}

module.exports = new Auth();
