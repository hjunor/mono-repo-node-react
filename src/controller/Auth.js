const User = require("../models/Users");
const bcrypt = require("bcrypt");

const rounds = 10;

class Auth {
  async create(req, res) {
    try {
      const { username, email, password } = req.body;

      const userExist = await User.findOne({ where: { email } });

      if (userExist) {
        res.status(400).json({ message: "Usuário ja cadastrado" });
      }

      const hash = bcrypt.hashSync(password, rounds);

      const user = await User.create({
        username,
        email,
        password: hash,
      });

      res.status(201).json({ data: user });
    } catch (error) {
      res.status(500).json({ message: "error server" });
    }
  }
  async index(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!user) {
        res.status(400).json({ message: "Usuário ja cadastrado" });
      }

      const match = user ? bcrypt.compareSync(password, user.password) : null;

      if (!match) {
        res.status(400).json({ message: "Senha incorreta" });
      }
      const token = generateJwt({ id: user.id });

      res.status(201).json({ data: user, token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error server" });
    }
  }

  async store(req, res) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "error server" });
    }
  }
}

module.exports = new Auth();
