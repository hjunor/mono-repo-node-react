const { DataTypes } = require('sequelize');

const database = require('../config/db');

const Category = database.define(
  'categories',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    database,
    modelName: 'categories',
  },
);
Category.prototype.toJSON = function () {
  const values = { ...this.get() };
  delete values.createdAt;
  delete values.updatedAt;
  delete values.id;

  return values;
};
Category.associate = (models) => {
  Category.hasMany(models.Arts, { foreignKey: 'categoryId' });
};

module.exports = Category;
