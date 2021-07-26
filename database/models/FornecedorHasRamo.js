module.exports = (sequelize, DataTypes) => {
    const FornecedorHasRamo = sequelize.define("FornecedorHasRamo",
        {
            fornecedor_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            ramo_atendimento_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: 'fornecedor_has_ramo',
            timestamps: false,
        }
    );

    // inserir id
    FornecedorHasRamo.removeAttribute('id');

    return FornecedorHasRamo;
};