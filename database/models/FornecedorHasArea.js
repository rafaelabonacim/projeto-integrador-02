module.exports = (sequelize, DataTypes) => {
    const FornecedorHasArea = sequelize.define("FornecedorHasArea",
        {
            fornecedor_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            area_de_atendimento_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: 'fornecedor_has_area',
            timestamps: false,
        }
    );

    // inserir id
    FornecedorHasArea.removeAttribute('id');

    return FornecedorHasArea;
};