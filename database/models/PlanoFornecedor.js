module.exports = (sequelize, DataTypes) => {
    const PlanoFornecedor = sequelize.define("PlanoFornecedor",
        {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            preco: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            data_inicio: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            data_fim: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            plano_id: {
                type: DataTypes.INTEGER,
            },
            fornecedor_id: {
                type: DataTypes.INTEGER,
            }
        },
        {
            tableName: 'plano_fornecedor',
            timestamps: true
        }
    );

    PlanoFornecedor.associate = function(models){
        PlanoFornecedor.belongsTo(models.Fornecedor, {
            as : "plano_contratado",
            foreignKey: "fornecedor_id",
            onDelete: 'cascade'
        });

        PlanoFornecedor.belongsTo(models.Plano, {
            as : "plano",
            foreignKey: "plano_id",
            onDelete: 'cascade'
        });
    };

    return PlanoFornecedor;
};