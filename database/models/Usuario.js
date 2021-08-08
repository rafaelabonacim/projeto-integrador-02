const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("Usuario",
        {
            id: {
                primaryKey: true, 
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false
            },
            tipo_usuario_id: {
                type: DataTypes.INTEGER,
            }
        },
        {
            tableName: 'usuario',
            timestamps: true
        }
    );

    Usuario.associate = function(models){
        Usuario.belongsTo(models.TipoUsuario, {
            as : "tipo_usuario",
            foreignKey: "tipo_usuario_id",
        });

        Usuario.hasOne(models.Fornecedor, {
            as : "fornecedor",
            foreignKey: "usuario_id",
        });

        Usuario.hasOne(models.Cliente, {
            as : "cliente",
            foreignKey: "usuario_id"
        });
    };
    
    return Usuario;
};