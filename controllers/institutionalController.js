const Sequelize = require('sequelize');
const config = require('../database/config/config');
const uuid4 = require("uuid4");
const { AreaDeAtendimento, Cliente, Endereco, Fornecedor, Orcamento, Plano, PlanoFornecedor, Usuario } = require('../database/models');

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
        const { plan, name, document, email, phone, whatsapp, password, zipcode, address, number, complement, district, state, city, stateArea } = req.body;

        await Usuario.create({
            id: uuid4(),
            tipo: 'Fornecedor',
            plano: plan,
            nome: name,
            cnpj: document,
            email,
            telefone: phone,
            whatsapp,
            senha: password,
            cep: zipcode,
            logradouro: address,
            numero: number,
            complemento: complement,
            bairro: district,
            estado: state,
            cidade: city,
            estado: stateArea
        })
        
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
};

module.exports = institutionalController;