module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("Usuario",
        {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
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
            tipo: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: 'usuario',
            timestamps: true
        }
    );
    
    return Usuario;
};