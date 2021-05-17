const { DataTypes } = require("sequelize");

const database = require("../config/db");

const Arts = database.define(
  "arts",
  {
    userId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    types: {
      type: DataTypes.STRING,
    },
    exclusivity: {
      type: DataTypes.BOOLEAN,
    },
    description: {
      type: DataTypes.STRING,
    },
    aproved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    database,
    modelName: "arts",
  }
);

Arts.prototype.toJSON = function () {
  const values = { ...this.get() };
  delete values.createdAt;
  delete values.updatedAt;
  delete values.id;

  return values;
};
Arts.associate = (models) => {
  Arts.belongsTo(models.User, { foreignKey: "userId" });
};

module.exports = Arts;
