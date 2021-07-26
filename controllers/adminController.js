const bcrypt = require('bcrypt');
const config = require('../database/config/config');
const { AreaDeAtendimento, Cliente, Endereco, Fornecedor, Orcamento, Plano, PlanoFornecedor, TipoUsuario, Usuario, FornecedorHasArea } = require('../database/models');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const adminController = {
    index: (req, res) => {
        return res.render('admin/index', { title: 'Painel Administrativo'})
    },
    listarFornecedor: async (req, res) => {
        // Listagem de Fornecedores
        const fornecedores = await Fornecedor.findAll({
            include: ['usuario', 'endereco', 'plano_contratado'],
            order: [['usuario', 'nome', 'ASC']],
            limit: 30,
            //offset: 0
        });

        return res.render('admin/listarFornecedor', { title: 'Listar de Fornecedores', fornecedores: fornecedores});
    },
    adicionarFornecedor: async (req, res) => {
        const { plan, name, document, email, phone, whatsapp, password, zipcode, address, number, complement, district, state, city, stateArea } = req.body;

        const cadastroRegex = /[ \(\)\x2D-\/]/g;

        const usuarioCriado = await Usuario.create({
            nome: name,
            email,
            senha: bcrypt.hashSync(password, 10),
            tipo_usuario_id: 2,
        }).catch(function (err) {
            console.log('Erro ao criar usuário', err)
        });

        const enderecoCriado = await Endereco.create({
            cep: zipcode.replace(cadastroRegex,''),
            logradouro: address,
            complemento: complement,
            bairro: district,
            numero: parseInt(number),
            estado: state,
            cidade: city
        }).catch(function (err) {
            console.log('Erro ao criar Endereço', err)
        });

        const fornecedorCriado = await Fornecedor.create({
            telefone: phone.replace(cadastroRegex,''),
            whatsapp: whatsapp.replace(cadastroRegex,''),
            cnpj: document.replace(cadastroRegex, ''),
            usuario_id: usuarioCriado.id,
            endereco_id: enderecoCriado.id,
        }).catch(function (err) {
            console.log('Erro ao criar Fornecedor')
            console.log(err, req.body)
        });

        // Areas de atendimento
        const areas = Array.isArray(stateArea) ? stateArea : [stateArea]

        for(const state of areas){
            await FornecedorHasArea.create({
                fornecedor_id: fornecedorCriado.id,
                area_de_atendimento_id: state
            }).catch(function (err) {
                console.log('Erro ao criar Área de Atendimento', err)
            });
        };

        // Plano
        const planoSelecionado = await Plano.findByPk(plan);

        // Tratamento da data
        const dataAtual = () => {
            return new Date();
        };

        const dataExpiracao = () => {
            const dataFinal = dataAtual();
            dataFinal.setFullYear(dataFinal.getFullYear() + 1);
            return dataFinal;
        };
        
        const dataInicio = dataAtual();
        const dataFim = dataExpiracao();

        const planoFornecedor = await PlanoFornecedor.create({
            nome: planoSelecionado.nome,
            preco: planoSelecionado.preco,
            data_inicio: dataInicio,
            data_fim: dataFim,
            plano_id: planoSelecionado.id,
            fornecedor_id: fornecedorCriado.id
        }).catch(function (err) {
            console.log('Erro ao criar Plano', err)
        });

        return res.redirect('/login')

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