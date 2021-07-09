module.exports = (sequelize, DataTypes) => {
    const Orcamento = sequelize.define("Orcamento",
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
            fornecedor_id: {
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
            as : "Orçamento",
            foreignKey: "usuario_id"
        }
    )};

    Orcamento.associate = function(models){
        Orcamento.belongsTo(models.Cliente, {
            as : "Orçamento",
            foreignKey: "usuario_id"
        }
    )};

    return Orcamento;
};