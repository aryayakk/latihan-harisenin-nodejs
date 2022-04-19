'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Articles', [{
      title: "title seeder 1", 
      body: "body seeder 1", 
      approved: true, 
      createdAt: '2022-04-09 11:25:08',
      updatedAt: '2022-04-09 11:25:08'
    },
    {
      title: "title seeder 2", 
      body: "body seeder 2", 
      approved: true,
      createdAt: '2022-04-09 11:25:08',
      updatedAt: '2022-04-09 11:25:08'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
