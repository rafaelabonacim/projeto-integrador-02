'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('plano_fornecedor', {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
          type: DataTypes.STRING,
          allowNull: false
      },
      preco: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      data_inicio: {
          type: DataTypes.DATEONLY,
          allowNull: false
      },
      data_fim: {
          type: DataTypes.DATEONLY,
          allowNull: false
      },
      plano_id: {
          type: DataTypes.INTEGER,
      },
      fornecedor_id: {
          type: DataTypes.INTEGER,
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
