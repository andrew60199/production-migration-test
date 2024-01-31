'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()

    try {
      const user = await queryInterface.bulkInsert('Users', [{
        firstName: 'Alfa',
        email: 'alfa@email.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        firstName: 'Bravo',
        email: 'bravo@email.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        firstName: 'Charlie',
        email: 'charlie@email.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {
        transaction
      })

      await transaction.commit()
    } catch (err) {
      await transaction.rollback()
      throw err
    }
  },

  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.bulkDelete('Users', null, { transaction })
      await transaction.commit()
    } catch (err) {
      await transaction.rollback()
      throw err
    }
  }
}
