'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tipo_usuario', {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
      },
      tipo: {
          type: DataTypes.STRING,
          allowNull: false
      }
    });
    
    TipoUsuario.associate = function(models){
      TipoUsuario.hasOne(models.Usuario, {
          as : "tipo_usuario",
          foreignKey: "tipo_usuario_id"
      });
    };
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tipo_usuario');
  }
};
