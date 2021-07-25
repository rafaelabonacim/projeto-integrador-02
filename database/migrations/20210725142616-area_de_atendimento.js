'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('area_de_atendimento', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Area.associate = function(models){
      Area.belongsToMany(models.Fornecedor, {
          as : 'area',
          through: 'fornecedor_has_area',
          unique: false,
          foreignKey: 'area_de_atendimento_id',
          otherKey: 'fornecedor_id',
          timestamps: true
      });
    };
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('area_de_atendimento');
  }
};