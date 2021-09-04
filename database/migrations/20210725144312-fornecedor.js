'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('fornecedor', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false
      },
      telefone: {
          type: Sequelize.STRING,
          allowNull: true
      },
      whatsapp: {
          type: Sequelize.STRING,
          allowNull: true
      },
      cnpj: {
          type: Sequelize.STRING,
          allowNull: false
      },
      endereco_id: {
          type: Sequelize.INTEGER,
      },
      usuario_id: {
          type: Sequelize.STRING,
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
          timestamps: false
      });

      Fornecedor.belongsToMany(models.RamoAtendimento, {
        as : 'ramo_atendimento',
        through: 'fornecedor_has_ramo',
        foreignKey: 'fornecedor_id',
        otherKey: 'ramo_atendimento_id',
        timestamps: false
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
