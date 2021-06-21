const sendMail = require('../helpers/email');
const Arts = require('../models/Arts');
const Types = require('../models/Types');
const User = require('../models/Users');
const fileDelete = require('../validators/fileDelete');
class ArtsContoller {
  async create(req, res) {
    try {
      const { filename: image } = req.file;

      const { id } = req;

      const { name, typesId, exclusivity, description, categoryId } = req.body;
      console.log(exclusivity);
      const user = await User.findOne({ id });
      const { id: types } = await Types.findOne({ id: typesId });
      const { id: category } = await Types.findOne({ id: categoryId });

      if (!user) {
        return res
          .status(400)
          .json({ error: { message: 'Usuário não encontrado.' } });
      }
      if (!typesId) {
        return res
          .status(400)
          .json({ error: { message: 'Tipo não encontrado.' } });
      }
      if (!categoryId) {
        return res
          .status(400)
          .json({ error: { message: 'Categoria não encontrada.' } });
      }

      const art = await Arts.create({
        userId: user.id,
        image,
        name,
        typesId: types,
        categoryId: category,
        exclusivity: exclusivity,
        description,
      });
      if (!art) {
        return res
          .status(400)
          .json({ error: { message: 'Não foi possivel adicionar Arte.' } });
      }
      art.image = `http://18.230.20.5:3003:3003/uploads/${art.image}`;
      await sendMail('create_art', {
        name: user.username,
        email: user.email,
        art: art.name,
      });
      return res.json({
        data: {
          art,
        },
      });
    } catch (error) {
      const file = await fileDelete(req.file.filename);

      if (!file) {
        return res
          .status(500)
          .json({ error: { message: 'error no Servidor' } });
      }
      console.log(error);
      return res.status(500).json({ error: { message: 'error no Servidor' } });
    }
  }
  async indexAll(req, res) {
    try {
      const { id } = req;

      const user = await User.findByPk(id);

      if (!user) {
        return res
          .status(400)
          .json({ error: { message: 'Arts de usuário não encontrado.' } });
      }

      const arts = await Arts.findAll({
        where: { userId: id },
        order: [['createdAt', 'DESC']],
      });

      const artsFile = arts.map((art) => {
        art.image = `http://18.230.20.5:3003/uploads/${art.image}`;

        return art;
      });

      return res.json(artsFile);
    } catch (error) {
      return res.status(500).json({ error: { message: 'error no Servidor' } });
    }
  }
  async indexAllAdmin(req, res) {
    try {
      const arts = await Arts.findAll({ order: [['createdAt', 'DESC']] });

      const artsFile = arts.map((art) => {
        art.image = `http://18.230.20.5:3003/uploads/${art.image}`;

        return art;
      });

      return res.json(artsFile);
    } catch (error) {
      return res.status(500).json({ error: { message: 'error no Servidor' } });
    }
  }
  async index(req, res) {
    try {
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
      art.image = `http://18.230.20.5:3003/uploads/${art.image}`;

      return res.json({ data: { art } });
    } catch (error) {
      return res.status(500).json({ error: { message: 'error no Servidor' } });
    }
  }
  async update(req, res) {
    try {
      const { filename } = req.file;

      const { id } = req.params;
      const { body } = req;

      console.log(body);

      body.exclusivity = !!body.exclusivity;

      const fields = [
        'name',
        'typesId',
        'exclusivity',
        'image',
        'description',
        'categoryId',
      ];

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

      art.image = `http://18.230.20.5:3003/uploads/${art.image}`;

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
  async updateOne(req, res) {
    try {
      const { id } = req.params;

      const { aproved, reason } = req.body;

      const art = await Arts.findByPk(id);
      console.log(art);
      const user = await User.findOne({ id: art.userId });

      art.aproved = aproved;

      if (reason) {
        art.reason = reason;
      }

      if (art.aproved === true) {
        art.reason = null;
      }
      await art.save();

      if (art.aproved === true) {
        await sendMail('aproved_art', {
          reason: art.reason,
          status: 'Aprovada',
          name: user.username,
          email: user.email,
          art: art.name,
        });
      }

      if (art.aproved === false) {
        await sendMail('aproved_art', {
          reason: art.reason,
          status: 'Reprovada',
          name: user.username,
          email: user.email,
          art: art.name,
        });
      }

      return res
        .status(200)
        .json({ data: { message: 'modificado com sucesso', art } });
    } catch (error) {
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
