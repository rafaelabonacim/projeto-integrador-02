'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orcamento', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false
      },
      quantidade: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      prazo: {
          type: Sequelize.STRING,
          allowNull: false
      },
      materia_prima: {
          type: Sequelize.STRING,
          allowNull: false
      },
      detalhes: {
          type: Sequelize.STRING,
          allowNull: false
      },
      fornecedor_id: {
          type: Sequelize.INTEGER,
      },
      cliente_id: {
          type: Sequelize.INTEGER,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });

    Orcamento.associate = function(models){
      Orcamento.belongsTo(models.Fornecedor, {
          as : "orcamento_fornecedor",
          foreignKey: "fornecedor_id"
      });

      Orcamento.belongsTo(models.Cliente, {
          as : "orcamento_cliente",
          foreignKey: "cliente_id"
      });
    };
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orcamento');
  }
};