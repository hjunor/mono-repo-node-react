'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('category', [
      {
        id: 1,
        name: 'category',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 1,
        name: 'category',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 1,
        name: 'category',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 1,
        name: 'category',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('category', null, {});
  },
};
