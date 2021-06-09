const { DataTypes } = require('sequelize');

const database = require('../config/db');

const Arts = database.define(
  'arts',
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
    },
    typesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    reason: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    exclusivity: {
      type: DataTypes.BOOLEAN,
    },
    description: {
      type: DataTypes.STRING,
    },
    aproved: {
      type: DataTypes.BOOLEAN,
      defaultValue: null,
    },
  },
  {
    database,
    modelName: 'arts',
  },
);

Arts.prototype.toJSON = function () {
  const values = { ...this.get() };
  delete values.createdAt;
  delete values.updatedAt;

  return values;
};
Arts.associate = (models) => {
  Arts.belongsTo(models.User, { foreignKey: 'userId' });
};

module.exports = Arts;
