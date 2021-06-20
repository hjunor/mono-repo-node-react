const Arts = require('../models/Arts');
const Types = require('../models/Types');

class TypesController {
  async index(req, res) {
    try {
      const { id: typesId } = req.params;

      const type = await Types.findByPk(typesId);
      if (!type) {
        return res
          .status(400)
          .json({ error: { message: 'Tipos não encontrado.' } });
      }

      const artsTypes = await Arts.findAll({
        where: { typesId },
      });
      return res.json(artsTypes);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: { message: 'error no Servidor' } });
    }
  }
}

module.exports = new TypesController();
