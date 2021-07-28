module.exports = (sequelize, DataTypes) => {
    const TipoUsuario = sequelize.define("TipoUsuario",
        {
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
        }
    );
    
    TipoUsuario.associate = function(models){
        TipoUsuario.hasOne(models.Usuario, {
            as : "tipo_usuario",
            foreignKey: "tipo_usuario_id"
        });
    };
    
    return TipoUsuario;
};