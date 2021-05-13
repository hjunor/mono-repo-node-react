const { DataTypes } = require("sequelize");

const database = require("../config/db");

const Bankinfo = database.define(
  "bankinfo",
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    agency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    account: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    doc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    database,
    modelName: "bankinfo",
  }
);
Bankinfo.prototype.toJSON = function () {
  const values = { ...this.get() };
  delete values.createdAt;
  delete values.updatedAt;
  return values;
};
Bankinfo.associate = function (models) {
  Bankinfo.hasMany(models.User, { as: "employes" });
};

module.exports = Bankinfo;
