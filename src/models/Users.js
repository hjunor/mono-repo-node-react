const { DataTypes } = require("sequelize");

const database = require("../config/db");

const User = database.define(
  "users",
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
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    provider: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    database,
    modelName: "users",
  }
);

User.prototype.toJSON = function () {
  const values = { ...this.get() };
  delete values.password;
  delete values.provider;
  delete values.cpf;
  delete values.id;
  delete values.createdAt;
  delete values.updatedAt;
  return values;
};

module.exports = User;
