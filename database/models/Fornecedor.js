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
            as : "Fornecedor",
            foreignKey: "usuario_id"
        }
    )};

    return Fornecedor;
};