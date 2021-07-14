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
                type: DataTypes.INTEGER,
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
        Endereco.belongsTo(models.Fornecedor, {
            as : "Endereço",
            foreignKey: "endereco_id"
        }
    )};

    Endereco.associate = function(models){
        Endereco.belongsTo(models.Cliente, {
            as : "Endereço",
            foreignKey: "endereco_id"
        }
    )};

    return Endereco;
};