'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuario', {
      id: {
        primaryKey: true, 
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },
      nome: {
          type: Sequelize.STRING,
          allowNull: false
      },
      email: {
          type: Sequelize.STRING,
          allowNull: false
      },
      senha: {
          type: Sequelize.STRING,
          allowNull: false
      },
      tipo_usuario_id: {
          type: Sequelize.INTEGER,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });

    Usuario.associate = function(models){
      Usuario.belongsTo(models.TipoUsuario, {
          as : "tipo_usuario",
          foreignKey: "tipo_usuario_id"
      });

      Usuario.hasOne(models.Fornecedor, {
          as : "fornecedor",
          foreignKey: "usuario_id"
      });

      Usuario.hasOne(models.Cliente, {
          as : "cliente",
          foreignKey: "usuario_id"
      });
    };
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuario');
  }
};