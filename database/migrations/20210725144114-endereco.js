'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('endereco', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false
      },
      cep: {
          type: Sequelize.STRING,
          allowNull: false
      },
      logradouro: {
          type: Sequelize.STRING,
          allowNull: false
      },
      complemento: {
          type: Sequelize.STRING,
          allowNull: true
      },
      bairro: {
          type: Sequelize.STRING,
          allowNull: false
      },
      numero: {
          type: Sequelize.STRING,
          allowNull: false
      },
      estado: {
          type: Sequelize.STRING,
          allowNull: false
      },
      cidade: {
          type: Sequelize.STRING,
          allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });

    Endereco.associate = function(models){
      Endereco.hasOne(models.Fornecedor, {
          as : "endereco_fornecedor",
          foreignKey: "endereco_id"
      });

      Endereco.hasOne(models.Cliente, {
          as : "endereco_cliente",
          foreignKey: "endereco_id"
      });
    };
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('endereco');
  }
};
