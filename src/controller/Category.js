const Arts = require('../models/Arts');
const Category = require('../models/Category');

class CategoryController {
  async index(req, res) {
    try {
      const { id: categoryId } = req.params;

      const category = await Category.findByPk(categoryId);

      if (!category) {
        return res
          .status(400)
          .json({ error: { message: 'Categoria não encontrada.' } });
      }

      const artsCategory = await Arts.findAll({
        where: { categoryId },
      });

      return res.json(artsCategory);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: { message: 'error no Servidor' } });
    }
  }
}

module.exports = new CategoryController();
