'use strict';

const { User } = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()

    try {
      const user = await queryInterface.bulkInsert('Users', [{
        firstName: 'Delta',
        email: 'delta@email.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        firstName: 'Echo',
        email: 'echo@email.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        firstName: 'Foxtrot',
        email: 'foxtrot@email.com',
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
      await User.destroy({ where: { firstName: 'Delta' } })
      await User.destroy({ where: { firstName: 'Echo' } })
      await User.destroy({ where: { firstName: 'Foxtrot' } })

      await transaction.commit()
    } catch (err) {
      await transaction.rollback()
      throw err
    }
  }
}