'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('fornecedor_has_area', {
      fornecedor_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      area_de_atendimento_id: {
          type: Sequelize.INTEGER,
          allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('fornecedor_has_area');
  }
};