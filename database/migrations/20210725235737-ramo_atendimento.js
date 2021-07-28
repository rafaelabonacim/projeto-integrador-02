'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ramo_atendimento', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false
      },
      ramo: {
          type: Sequelize.STRING,
          allowNull: false
      }
    });

    RamoAtendimento.associate = function(models){
      RamoAtendimento.belongsToMany(models.Fornecedor, {
          as : 'ramo_atendimento',
          through: 'fornecedor_has_ramo',
          foreignKey: 'ramo_atendimento_id',
          otherKey: 'fornecedor_id',
          timestamps: false
      });
    };

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ramo_atendimento');
  }
};
