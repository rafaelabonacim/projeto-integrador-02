'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('area_de_atendimento', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('area_de_atendimento');
  }
};