'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('plano', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
          type: Sequelize.STRING,
          allowNull: false
      },
      orcamentos: {
          type: Sequelize.BOOLEAN,
          allowNull: false
      },
      listagem: {
          type: Sequelize.BOOLEAN,
          allowNull: false
      },
      publicidade: {
          type: Sequelize.BOOLEAN,
          allowNull: false
      },
      preco: {
          type: Sequelize.STRING,
          allowNull: false
      },
      preco_promocional: {
          type: Sequelize.STRING,
          allowNull: false
      },
      parcelas: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });

    Plano.associate = function(models){
      Plano.hasOne(models.PlanoFornecedor, {
          as : "plano",
          foreignKey: "plano_id"
      });
    };

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('plano');
  }
};
