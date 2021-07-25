'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cliente', {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    whatsapp: {
        type: DataTypes.STRING,
        allowNull: true
    },
    usuario_id: {
        type: DataTypes.STRING,
    },
    endereco_id: {
        type: DataTypes.INTEGER,
    },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });

    Cliente.associate = function(models){
      Cliente.belongsTo(models.Usuario, {
          as : "usuario",
          foreignKey: "usuario_id"
      });

      Cliente.belongsTo(models.Endereco, {
          as : "endereco",
          foreignKey: "endereco_id"
      });

      Cliente.hasMany(models.Orcamento, {
          as : "orcamento_cliente",
          foreignKey: "cliente_id"
      });
    };
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cliente');
  }
};
