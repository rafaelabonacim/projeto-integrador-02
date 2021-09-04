module.exports = (sequelize, DataTypes) => {
    const Fornecedor = sequelize.define("Fornecedor",
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
            cnpj: {
                type: DataTypes.STRING,
                allowNull: false
            },
            endereco_id: {
                type: DataTypes.INTEGER,
            },
            usuario_id: {
                type: DataTypes.STRING,
            }
        },
        {
            tableName: 'fornecedor',
            timestamps: true,
            paranoid: true
        }
    );

    Fornecedor.associate = function(models){
        Fornecedor.belongsTo(models.Usuario, {
            as : "usuario",
            foreignKey: "usuario_id",
        });

        Fornecedor.belongsTo(models.Endereco, {
            as : "endereco",
            foreignKey: "endereco_id",
        });

        Fornecedor.hasMany(models.Orcamento, {
            as : "orcamento_fornecedor",
            foreignKey: "fornecedor_id",
        });

        Fornecedor.belongsToMany(models.Area, {
            as : 'area',
            through: 'fornecedor_has_area',
            foreignKey: 'fornecedor_id',
            otherKey: 'area_de_atendimento_id',
            timestamps: false,
        });

        Fornecedor.belongsToMany(models.RamoAtendimento, {
            as : 'ramo_atendimento',
            through: 'fornecedor_has_ramo',
            foreignKey: 'fornecedor_id',
            otherKey: 'ramo_atendimento_id',
            timestamps: false,
        });

        Fornecedor.hasOne(models.PlanoFornecedor, {
            as : "plano_contratado",
            foreignKey: "fornecedor_id",
        });
    };

    return Fornecedor;
};