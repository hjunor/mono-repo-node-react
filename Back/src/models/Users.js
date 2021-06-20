const { DataTypes } = require('sequelize');

const database = require('../config/db');

const User = database.define(
  'users',
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    cpf: {
      type: DataTypes.STRING,
    },
    provider: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    verify: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
    },
    biographyId: DataTypes.UUID,
    bankinfoId: DataTypes.UUID,
  },
  {
    database,
    modelName: 'users',
  },
);

User.prototype.toJSON = function () {
  const values = { ...this.get() };
  delete values.password;
  delete values.provider;
  delete values.cpf;
  delete values.id;
  delete values.biographyId;
  delete values.bankinfoId;
  delete values.createdAt;
  delete values.updatedAt;
  return values;
};

User.associate = (models) => {
  User.hasMany(models.Arts, { foreignKey: 'userId' });
};
User.associate = function (models) {
  User.belongsTo(models.Biography, {
    foreignKey: 'bankinfoId',
    as: 'bankinfo',
  });
  User.belongsTo(models.Biography, {
    foreignKey: 'biographyId',
    as: 'biography',
  });
};

module.exports = User;
