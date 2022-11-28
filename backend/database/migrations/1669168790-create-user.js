'use strict';
const ROLE = require('../../enums/roles');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        isEmail: true
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.ENUM(ROLE.MANAGER, ROLE.PARENT),
        defaultValue: ROLE.PARENT
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user', { cascade: true });
  }
};