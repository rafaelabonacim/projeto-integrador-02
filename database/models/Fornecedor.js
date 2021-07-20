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
                type: DataTypes.INTEGER,
                allowNull: true
            },
            whatsapp: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            cnpj: {
                type: DataTypes.INTEGER,
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
            timestamps: true
        }
    );

    Fornecedor.associate = function(models){
        Fornecedor.belongsTo(models.Usuario, {
            as : "usuario",
            foreignKey: "usuario_id"
        });

        Fornecedor.belongsTo(models.Endereco, {
            as : "endereco",
            foreignKey: "endereco_id"
        });

        Fornecedor.hasMany(models.Orcamento, {
            as : "orcamento_fornecedor",
            foreignKey: "fornecedor_id"
        });

        Fornecedor.belongsToMany(models.Area, {
            as : 'area',
            through: 'fornecedor_has_area',
            foreignKey: 'fornecedor_id',
            otherKey: 'area_de_atendimento_id',
            timestamps: true
        });

        Fornecedor.hasOne(models.PlanoFornecedor, {
            as : "plano_contratado",
            foreignKey: "fornecedor_id"
        });
    };

    return Fornecedor;
};