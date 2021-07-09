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
            plano: {
                type: DataTypes.STRING,
                allowNull: false
            },
            valor: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            tipo: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            usuario_id: {
                type: DataTypes.INTEGER,
            },
            endereco_id: {
                type: DataTypes.INTEGER,
            }
        },
        {
            tableName: 'fornecedor',
            timestamps: true
        }
    );

    Fornecedor.associate = function(models){
        Fornecedor.hasMany(models.Usuario, {
            as : "Fornecedor",
            foreignKey: "usuario_id"
        }
    )};

    return Fornecedor;
};