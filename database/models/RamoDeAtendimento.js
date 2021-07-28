module.exports = (sequelize, DataTypes) => {
    const RamoAtendimento = sequelize.define("RamoAtendimento", {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false
            },
            ramo: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: 'ramo_atendimento',
            timestamps: false
        }
    );
    
    RamoAtendimento.associate = function(models){
        RamoAtendimento.belongsToMany(models.Fornecedor, {
            as : 'ramo_atendimento',
            through: 'fornecedor_has_ramo',
            foreignKey: 'ramo_atendimento_id',
            otherKey: 'fornecedor_id',
            timestamps: false
        });
    };
    
    return RamoAtendimento;
};