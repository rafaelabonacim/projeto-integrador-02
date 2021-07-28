'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('plano_fornecedor', {
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
      preco: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      data_inicio: {
          type: Sequelize.DATEONLY,
          allowNull: false
      },
      data_fim: {
          type: Sequelize.DATEONLY,
          allowNull: false
      },
      plano_id: {
          type: Sequelize.INTEGER,
      },
      fornecedor_id: {
          type: Sequelize.INTEGER,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
    
    PlanoFornecedor.associate = function(models){
      PlanoFornecedor.belongsTo(models.Fornecedor, {
          as : "plano_contratado",
          foreignKey: "fornecedor_id"
      });

      PlanoFornecedor.belongsTo(models.Plano, {
          as : "plano",
          foreignKey: "plano_id"
      });
    };
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('plano_fornecedor');
  }
};
