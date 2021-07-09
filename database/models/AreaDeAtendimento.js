module.exports = (sequelize, DataTypes) => {
    const Area = sequelize.define("Area",
        {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false
            },
            estado: {
                type: DataTypes.STRING,
                allowNull: true
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

    Area.associate = function(models){
        Area.belongsTo(models.Fornecedor, {
            as : "Área de Atendimento",
            foreignKey: "fornecedor_id"
        }
    )};

    return Area;
};