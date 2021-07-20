const uuid4 = require("uuid4");
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { AreaDeAtendimento, Cliente, Endereco, Fornecedor, Orcamento, Plano, PlanoFornecedor, TipoUsuario, Usuario, FornecedorHasArea } = require('../database/models');

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
        
        console.log(req.body)

        const usuarioCriado = await Usuario.create({
            id: uuid4(),
            nome: name,
            email,
            senha: bcrypt.hashSync(password, 10),
            tipo_usuario_id: 2,
        });

        console.log(usuarioCriado)

        // const enderecoCriado = await Endereco.create({
        //     cep: zipcode,
        //     logradouro: address,
        //     complemento: complement,
        //     bairro: district,
        //     numero: number,
        //     estado: state,
        //     cidade: city
        // });

        // const fornecedorCriado = await Fornecedor.create({
        //     telefone: phone,
        //     whatsapp,
        //     cnpj: document,
        //     usuario_id: usuarioCriado.id,
        //     endereco_id: enderecoCriado.id,
        // });

        // // Areas de atendimento
        // if(typeof stateArea !== 'object'){
        //     stateArea = [stateArea]
        // };

        // stateArea = stateArea.map(area =>{
        //     return {
        //         fornecedor_id: fornecedorCriado.id,
        //         area_de_atendimento_id: parseInt(area)
        //     };
        // });

        // FornecedorHasArea.bulkInsert(stateArea);

        // // Plano
        // const planoSelecionado = await Plano.findByPk(plan);

        // const dataAtual = new Date();
        // const dataFim = dataAtual.setFullYear(dataAtual.getFullYear() + 1);

        // const planoFornecedor = await PlanoFornecedor.create({
        //     nome: planoSelecionado.nome,
        //     preco: planoSelecionado.preco,
        //     data_inicio: dataAtual,
        //     data_fim: dataFim,
        //     plano_id: planoSelecionado.id,
        //     fornecedor_id: fornecedorCriado.id
        // });

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