const uuid4 = require("uuid4");
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { AreaDeAtendimento, Cliente, Endereco, Fornecedor, Orcamento, Plano, PlanoFornecedor, TipoUsuario, Usuario } = require('../database/models');

const institutionalController = {
    index: (req, res) => {
        return res.render('index', { title: 'Portal para Cotação em Usinagem'})
    },
    anuncie: (req, res) => {
        return res.render('anuncie', { title: 'Anuncie'})
    },
    parceiros: (req, res) => {
        return res.render('parceiros', { title: 'Parceiros'})
    },
    perfil: (req, res) => {
        return res.render('perfilCadastro', { title: 'Cadastro'})
    },
    cadastroFornecedor: (req, res) => {
        return res.render('cadastroFornecedor', { title: 'Cadastro de Fornecedor'})
    },
    cadastroFornecedorCreate: async (req, res) => {
        /*
        const { plan, name, document, email, phone, whatsapp, password, zipcode, address, number, complement, district, state, city, stateArea } = req.body;

        await Usuario.create({
            id: uuid4(),
            tipo_usuario_id: 2,
            nome: name,
            email,
            senha: password,
            cep: zipcode,
            logradouro: address,
            numero: number,
            complemento: complement,
            bairro: district,
            estado: state,
            cidade: city,
            estado: stateArea,
            endereco_id: teste.id,
            usuario_id: usuario.id,
            telefone: phone,
            whatsapp,
            cnpj: document,
            plano: plan,
            valor: 500,
        })
        */

        return res.redirect('/login')
        
    },
    cadastrocliente: (req, res) => {
        return res.render('cadastroCliente', { title: 'Cadastro'})
    },
    login: (req, res) => {
        return res.render('login', { title: 'Login'})
    },
    forgotpassword: (req,res)=> {
        return res.render('esqueci-senha', {title: 'Esqueci senha'})
    },
    recuperarsenha: (req, res) => {
        return res.render('recuperar-senha', { title: 'Recuperar senha'})
    }
    /*
    teste: async (req, res) => {
        const listarUsuario = Usuario.findAll()
        
        const createUser = Usuario.create({
            id: uuid4(),
            nome: 'Victor',
            email: 'victoramota@gmail.com',
            senha: bcrypt.hashSync('123456', 10),
            tipo_usuario_id: 3
        })
        
        return res.redirect('login');
    }
    */
};

module.exports = institutionalController;