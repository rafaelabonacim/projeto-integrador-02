module.exports = (sequelize, DataTypes) => {
    const Area = sequelize.define("Area", {
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
        },
        {
            tableName: 'area_de_atendimento',
            timestamps: false
    });

    Area.associate = function(models){
        Area.belongsToMany(models.Fornecedor, {
            as : 'area',
            through: 'fornecedor_has_area',
            unique: false,
            foreignKey: 'area_de_atendimento_id',
            otherKey: 'fornecedor_id',
            timestamps: true
        })
    };

    return Area;
};