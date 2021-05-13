const { DataTypes } = require("sequelize");

const database = require("../config/db");

const Biography = database.define(
  "biography",
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bithDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    facebook: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    instagram: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    portifolioLink: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    database,
    modelName: "biography",
  }
);

Biography.prototype.toJSON = function () {
  const values = { ...this.get() };
  delete values.createdAt;
  delete values.updatedAt;
  return values;
};
Biography.associate = function (models) {
  Biography.hasMany(models.User, { as: "employes" });
};

module.exports = Biography;
