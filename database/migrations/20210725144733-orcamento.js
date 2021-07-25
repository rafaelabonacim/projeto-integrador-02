'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orcamento', {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
      },
      quantidade: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      prazo: {
          type: DataTypes.STRING,
          allowNull: false
      },
      materia_prima: {
          type: DataTypes.STRING,
          allowNull: false
      },
      detalhes: {
          type: DataTypes.STRING,
          allowNull: false
      },
      fornecedor_id: {
          type: DataTypes.INTEGER,
      },
      cliente_id: {
          type: DataTypes.INTEGER,
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