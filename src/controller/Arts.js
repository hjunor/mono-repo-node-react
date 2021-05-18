const Arts = require('../models/Arts');
const User = require('../models/Users');
const fileDelete = require('../validators/fileDelete');
class ArtsContoller {
  async create(req, res) {
    try {
      const { filename: image } = req.file;

      const { id } = req;

      const { name, types, exclusivity, description } = req.body;

      const user = await User.findOne({ id });

      if (!user) {
        return res
          .status(400)
          .json({ error: { message: 'Usuário não encontrado.' } });
      }

      const art = await Arts.create({
        userId: user.id,
        image,
        name,
        types,
        exclusivity: !!exclusivity,
        description,
      });
      if (!art) {
        return res
          .status(400)
          .json({ error: { message: 'Não foi possivel adicionar Arte.' } });
      }
      art.image = `http://localhost:3003/uploads/${art.image}`;

      return res.json({
        data: {
          art,
        },
      });
    } catch (error) {
      return res.status(500).json({ error: { message: 'error no Servidor' } });
    }
  }
  async indexAll(req, res) {
    const { id } = req;

    const user = await User.findOne({ id });

    if (!user) {
      return res
        .status(400)
        .json({ error: { message: 'Arts de usuário não encontrado.' } });
    }

    const arts = await Arts.findAll({ where: { userId: id } });

    const artsFile = arts.map((art) => {
      art.image = `http://localhost:3003/uploads/${art.image}`;

      return art;
    });

    return res.json({ data: { artsFile } });
  }
  async index(req, res) {
    const { id: artsId } = req.params;
    const { id } = req;
    const user = await User.findOne({ id });

    if (!user) {
      return res
        .status(400)
        .json({ error: { message: ' Arts de usuário não encontrado.' } });
    }

    const art = await Arts.findOne({ where: { id: artsId } });

    if (!art) {
      return res
        .status(400)
        .json({ error: { message: ' Arts de usuário não encontrado.' } });
    }
    art.image = `http://localhost:3003/uploads/${art.image}`;

    return res.json({ data: { art } });
  }
  async update(req, res) {
    try {
      const { filename } = req.file;

      const { id } = req.params;
      const { body } = req;

      body.exclusivity = !!body.exclusivity;

      const fields = ['name', 'types', 'exclusivity', 'image', 'description'];

      const art = await Arts.findOne({ id });

      if (!art)
        return res.status(400).json({
          error: { message: 'Não foi possivel fazer essa alteração.' },
        });

      body.image = filename;

      const file = fileDelete(art.image);

      if (!file)
        return res.status(400).json({
          error: { message: 'Não foi possivel fazer essa alteração.' },
        });

      fields.map((fildName) => {
        const newValue = body[fildName];
        if (newValue != undefined) {
          art[fildName] = newValue;
        }
      });

      await art.save();

      art.image = `http://localhost:3003/uploads/${art.image}`;

      return res.json({ data: { art } });
    } catch (error) {
      const file = await fileDelete(req.file.filename);

      if (!file) {
        return res
          .status(500)
          .json({ error: { message: 'error no Servidor' } });
      }
      return res.status(500).json({ error: { message: 'error no Servidor' } });
    }
  }
  async destroy(req, res) {
    try {
      const { id } = req.params;
      const art = await Arts.findOne({ where: { id } });
      const file = await fileDelete(art.image);

      if (!art && file) {
        return res
          .status(400)
          .json({ message: ' Arts de usuário não deletada.' });
      }

      await Arts.destroy({ where: { id } });

      return res.json({ data: { destroy: true } });
    } catch (error) {
      return res.status(500).json({ error: { message: 'error no Servidor' } });
    }
  }
}

module.exports = new ArtsContoller();
