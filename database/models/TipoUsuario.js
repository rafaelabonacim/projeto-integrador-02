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
        },
        {
            tableName: 'tipo_usuario',
            timestamps: true
        }
    );
    
    return TipoUsuario;
};