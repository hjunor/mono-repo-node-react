const Biography = require('../models/Biography');
const User = require('../models/Users');
const fileDelete = require('../validators/fileDelete');

class BiographyController {
  async update(req, res) {
    try {
      const { filename } = req.file;

      const { id, body } = req;

      body.photo = filename;

      const fields = [
        'photo',
        'resumer',
        'birthDate',
        'instagram',
        'facebook',
        'portfolioLink',
      ];

      const { biographyId } = await User.findOne({ id });

      const bio = await Biography.findOne({ biographyId });

      if (!bio)
        return res.status(400).json({ message: 'Biografia não encontrada.' });

      const file = fileDelete(bio.photo);

      if (!file)
        return res
          .status(400)
          .json({ message: 'Não foi possivel fazer essa alteração.' });

      fields.map((fildName) => {
        const newValue = body[fildName];
        if (newValue != undefined) {
          bio[fildName] = newValue;
        }
      });

      await bio.save();

      bio.photo = `http://localhost:3003/profile/${bio.photo}`;

      return res.json({ data: { bio } });
    } catch (error) {
      const file = await fileDelete(req.file.filename);

      if (!file) {
        return res.status(500).json({ error: 'error no Servidor' });
      }
      return res.status(500).json({ error: 'error no Servidor' });
    }
  }
}

module.exports = new BiographyController();
