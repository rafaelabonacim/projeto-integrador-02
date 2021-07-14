module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("Usuario",
        {
            id: {
                primaryKey: true,
                type: DataTypes.STRING,
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
            as : "Usuários",
            foreignKey: "usuario_id"
        }
    )};
    
    return Usuario;
};