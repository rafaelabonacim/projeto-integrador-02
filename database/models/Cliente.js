module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define("Cliente",
        {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false
            },
            telefone: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            whatsapp: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            usuario_id: {
                type: DataTypes.INTEGER,
            },
            endereco_id: {
                type: DataTypes.INTEGER,
            }
        },
        {
            tableName: 'fornecedor',
            timestamps: true
        }
    );

    Cliente.associate = function(models){
        Cliente.hasMany(models.Usuario, {
            as : "Cliente",
            foreignKey: "usuario_id"
        }
    )};

    return Cliente;
};