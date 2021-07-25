const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { AreaDeAtendimento, Cliente, Endereco, Fornecedor, Orcamento, Plano, PlanoFornecedor, TipoUsuario, Usuario } = require('../database/models');

const adminController = {
    index: (req, res) => {
        return res.render('admin/index', { title: 'Painel Administrativo'})
    },
    listarFornecedor: async (req, res) => {
        return res.render('admin/listarFornecedor', { title: 'Listar de Fornecedores'})
    },
    adicionarFornecedor: async (req, res) => {
        return res.render('admin/adicionarFornecedor', { title: 'Adicionar Fornecedor'})
    },
    salvarFornecedor:  (req, res) => {
        return res.render('admin/adicionarFornecedor', { title: 'Adicionar Fornecedor'})
    },
    editarFornecedor:  (req, res) => {
        return res.render('admin/editarFornecedor', { title: 'Editar Fornecedor'})
    },
    atualizarFornecedor:  (req, res) => {
        return res.render('admin/editarFornecedor', { title: 'Editar Fornecedor'})
    },
    excluirFornecedor: (req,res) => {
        let { id } = req.params;
        let fornecedorEncontrado = services.findIndex(fornecedor => fornecedor.id == id);
        
        return res.redirect('admin/listaServicos');
    },
    listarCliente:  (req, res) => {
        return res.render('admin/listarCliente', { title: 'Listar Clientes'})
    },
    adicionarCliente: (req,res) => {
        // const { name, email, phone, whatsapp, password, confirmPassword, zipcode, address, numero, complement, district, state, city } = req.body;
        return res.render('admin/adicionarCliente', { title: 'Adicionar Clientes'})
    },
    salvarCliente: (req,res) => {
        return res.render('admin/adicionarCliente', { title: 'Adicionar Clientes'})
    },
    editarCliente: (req,res) => {
        return res.render('admin/editarCliente', { title: 'Editar Clientes'})
    },
    atualizarCliente: (req,res) => {
        return res.render('admin/editarCliente', { title: 'Editar Clientes'})
    },
    excluirCliente: (req,res) => {
        let { id } = req.params;
        let clienteEncontrado = clientes.findIndex(cliente => cliente.id == id);
        
        return res.redirect('admin/listarCliente');
    },
    listarOrcamentos:  (req, res) => {
        return res.render('admin/listarOrcamentos', { title: 'Listar Orçamentos'})
    },
    orcamentoDetalhado:  (req, res) => {
        return res.render('admin/orcamentoDetalhado', { title: 'Orçamento Detalhado'})
    },

};

module.exports = adminController;