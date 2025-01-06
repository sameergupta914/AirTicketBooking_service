'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports',[{
    name:'Shivaji maharaj international airport',
    cityId:11,
    createdAt:new Date(),
    updatedAt:new Date()
   },
   {
    name:'Mysore international airport',
    cityId:20,
    createdAt:new Date(),
    updatedAt:new Date()
   },
   {
    name:'KemmpeGowda international airport',
    cityId:20,
    createdAt:new Date(),
    updatedAt:new Date()
   },
   {
    name:'Mangaluru international airport',
    cityId:20,
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
