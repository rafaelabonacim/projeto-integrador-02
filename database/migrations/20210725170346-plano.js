'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('plano', {
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
      orcamentos: {
          type: DataTypes.BOOLEAN,
          allowNull: false
      },
      listagem: {
          type: DataTypes.BOOLEAN,
          allowNull: false
      },
      publicidade: {
          type: DataTypes.BOOLEAN,
          allowNull: false
      },
      preco: {
          type: DataTypes.STRING,
          allowNull: false
      },
      preco_promocional: {
          type: DataTypes.STRING,
          allowNull: false
      },
      parcelas: {
          type: DataTypes.INTEGER,
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
