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
                type: DataTypes.STRING,
                allowNull: true
            },
            whatsapp: {
                type: DataTypes.STRING,
                allowNull: true
            },
            usuario_id: {
                type: DataTypes.STRING,
            },
            endereco_id: {
                type: DataTypes.INTEGER,
            }
        },
        {
            tableName: 'cliente',
            timestamps: true
        }
    );

    Cliente.associate = function(models){
        Cliente.belongsTo(models.Usuario, {
            as : "usuario",
            foreignKey: "usuario_id",
            onDelete: 'cascade'
        });

        Cliente.belongsTo(models.Endereco, {
            as : "endereco",
            foreignKey: "endereco_id",
            onDelete: 'cascade'
        });

        Cliente.hasMany(models.Orcamento, {
            as : "orcamento_cliente",
            foreignKey: "cliente_id"
        });
    };

    return Cliente;
};