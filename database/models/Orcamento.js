module.exports = (sequelize, DataTypes) => {
    const Orcamento = sequelize.define("Orcamento",
        {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false
            },
            quantidade: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            prazo: {
                type: DataTypes.STRING,
                allowNull: false
            },
            materia_prima: {
                type: DataTypes.STRING,
                allowNull: false
            },
            detalhes: {
                type: DataTypes.STRING,
                allowNull: false
            },
            fornecedor_id: {
                type: DataTypes.INTEGER,
            },
            cliente_id: {
                type: DataTypes.INTEGER,
            }
        },
        {
            tableName: 'orcamento',
            timestamps: true
        }
    );

    Orcamento.associate = function(models){
        Orcamento.belongsTo(models.Fornecedor, {
            as : "orcamento_fornecedor",
            foreignKey: "fornecedor_id"
        });

        Orcamento.belongsTo(models.Cliente, {
            as : "orcamento_cliente",
            foreignKey: "cliente_id"
        });
    };

    return Orcamento;
};