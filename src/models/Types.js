const { DataTypes } = require('sequelize');

const database = require('../config/db');

const Types = database.define(
  'types',
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
    modelName: 'types',
  },
);
Types.prototype.toJSON = function () {
  const values = { ...this.get() };
  delete values.createdAt;
  delete values.updatedAt;
  delete values.id;

  return values;
};
Types.associate = (models) => {
  Types.hasMany(models.Arts, { foreignKey: 'typesId' });
};

module.exports = Types;
