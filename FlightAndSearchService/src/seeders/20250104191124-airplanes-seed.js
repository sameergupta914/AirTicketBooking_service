'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
      await queryInterface.bulkInsert('Airplanes', [
        {
        modelNumber: 'Boeing 777',
        capacity: 350,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber: 'Boeing 727',
        capacity: 150,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber: 'Boeing 747',
        capacity: 400,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber: 'Airbus A320',
        capacity: 300,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modelNumber: 'Boeing 747',
        capacity:330,
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ], {});
    
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
