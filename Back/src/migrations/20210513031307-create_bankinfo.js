"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("bankinfos", {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      agency: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      account: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      owner: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      doc: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("bankinfos");
  },
};
