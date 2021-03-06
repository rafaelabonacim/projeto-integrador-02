module.exports = (sequelize, DataTypes) => {
    const Plano = sequelize.define("Plano",
        {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            orcamentos: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            listagem: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            publicidade: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            preco: {
                type: DataTypes.STRING,
                allowNull: false
            },
            preco_promocional: {
                type: DataTypes.STRING,
                allowNull: false
            },
            parcelas: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: 'plano',
            timestamps: true
        }
    );

    Plano.associate = function(models){
        Plano.hasOne(models.PlanoFornecedor, {
            as : "plano",
            foreignKey: "plano_id"
        });
    };

    return Plano;
};