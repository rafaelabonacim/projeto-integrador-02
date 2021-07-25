'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('fornecedor', {
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
      cnpj: {
          type: DataTypes.STRING,
          allowNull: false
      },
      endereco_id: {
          type: DataTypes.INTEGER,
      },
      usuario_id: {
          type: DataTypes.STRING,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });

    Fornecedor.associate = function(models){
      Fornecedor.belongsTo(models.Usuario, {
          as : "usuario",
          foreignKey: "usuario_id"
      });

      Fornecedor.belongsTo(models.Endereco, {
          as : "endereco",
          foreignKey: "endereco_id"
      });

      Fornecedor.hasMany(models.Orcamento, {
          as : "orcamento_fornecedor",
          foreignKey: "fornecedor_id"
      });

      Fornecedor.belongsToMany(models.Area, {
          as : 'area',
          through: 'fornecedor_has_area',
          foreignKey: 'fornecedor_id',
          otherKey: 'area_de_atendimento_id',
          timestamps: true
      });

      Fornecedor.hasOne(models.PlanoFornecedor, {
          as : "plano_contratado",
          foreignKey: "fornecedor_id"
      });
    };
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('fornecedor');
  }
};
