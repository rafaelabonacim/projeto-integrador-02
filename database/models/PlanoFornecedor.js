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
                allowNull: true
            },
            valor: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            data_inicio: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            data_fim: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            plano_id: {
                type: DataTypes.INTEGER,
            },
            fornecedor_id: {
                type: DataTypes.INTEGER,
            }
        },
        {
            tableName: 'area_de_atendimento',
            timestamps: true
        }
    );

    PlanoFornecedor.associate = function(models){
        PlanoFornecedor.belongsTo(models.Fornecedor, {
            as : "Plano Contratado",
            foreignKey: "fornecedor_id"
        }
    )};

    return PlanoFornecedor;
};