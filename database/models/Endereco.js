module.exports = (sequelize, DataTypes) => {
    const Endereco = sequelize.define("Endereco",
        {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false
            },
            cep: {
                type: DataTypes.STRING,
                allowNull: false
            },
            logradouro: {
                type: DataTypes.STRING,
                allowNull: false
            },
            complemento: {
                type: DataTypes.STRING,
                allowNull: true
            },
            bairro: {
                type: DataTypes.STRING,
                allowNull: false
            },
            numero: {
                type: DataTypes.STRING,
                allowNull: false
            },
            estado: {
                type: DataTypes.STRING,
                allowNull: false
            },
            cidade: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: 'endereco',
            timestamps: true
        }
    );

    Endereco.associate = function(models){
        Endereco.hasOne(models.Fornecedor, {
            as : "endereco_fornecedor",
            foreignKey: "endereco_id"
        });

        Endereco.hasOne(models.Cliente, {
            as : "endereco_cliente",
            foreignKey: "endereco_id"
        });
    };

    return Endereco;
};