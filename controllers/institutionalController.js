const bcrypt = require('bcrypt');
const config = require('../database/config/config');
const { AreaDeAtendimento, Cliente, Endereco, Fornecedor, Orcamento, Plano, PlanoFornecedor, TipoUsuario, Usuario, FornecedorHasArea, FornecedorHasRamo } = require('../database/models');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const institutionalController = {
    index: (req, res) => {
        return res.render('index', { title: 'Portal para Cotação em Usinagem'})
    },
    anuncie: (req, res) => {
        return res.render('anuncie', { title: 'Anuncie'})
    },
    parceiros: async (req, res) => {
        // Listagem de Fornecedores
        const fornecedores = await Fornecedor.findAll({
            include: ['usuario', 'endereco'],
            order: [['usuario', 'nome', 'ASC']],
            limit: 20
        });
        
        return res.render('parceiros', { title: 'Parceiros', fornecedores: fornecedores})
    },
    parceirosBusca: async (req, res) => {
        // Busca pelo nome
        let { name, state } = req.query;

        name = name ? name : ""
        state = state ? state : ""

        const buscaFornecedores = await Fornecedor.findAll({
            include: [{
                model: Usuario,
                as: 'usuario',
                where: {
                    nome: { [Op.like]: `%${name}%` }
                }
            },
            {
                model: Endereco,
                as: 'endereco',
                where: {
                    estado: { [Op.like]: `%${state}%` },
                }
            }],
            order: [['usuario', 'nome', 'ASC']],
        });

        return res.render('parceiros', { title: 'Parceiros', fornecedores: buscaFornecedores})
    },
    perfil: (req, res) => {
        return res.render('perfilCadastro', { title: 'Cadastro'})
    },
    cadastroFornecedor: (req, res) => {
        return res.render('cadastroFornecedor', { title: 'Cadastro de Fornecedor'})
    },
    cadastroFornecedorCreate: async (req, res) => {
        const { plan, branch, name, document, email, phone, whatsapp, password, zipcode, address, number, complement, district, state, city, stateArea } = req.body;

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

        // Ramo de Atuacao
        const ramos = Array.isArray(branch) ? branch : [branch]

        for(const ramo of ramos){
            await FornecedorHasRamo.create({
                fornecedor_id: fornecedorCriado.id,
                ramo_atendimento_id: ramo
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
        
    },
    cadastrocliente: (req, res) => {
        return res.render('cadastroCliente', { title: 'Cadastro'})
    },
    cadastroclienteCreate: async(req, res) => {
        const{name,email, phone, whatsapp, password, zipcode, address, number, complement, district, state, city} = req.body

        const usuarioCriado = await Usuario.create({
            nome: name,
            email,
            senha: bcrypt.hashSync(password, 10),
            tipo_usuario_id: 1,
        }).catch(function (err) {
            console.log('Erro ao criar usuário', err)
        });

        const enderecoCriado = await Endereco.create({
            cep: zipcode,
            logradouro: address,
            numero: parseInt(number),
            complemento: complement,
            bairro: district, 
            estado:state,
            cidade: city      
        }).catch(function (err) {
            console.log('Erro ao criar Endereço', err)
        });

        const clienteCriado = await Cliente.create({
            telefone: phone,
            whatsapp: whatsapp,
            usuario_id: usuarioCriado.id,
            endereco_id: enderecoCriado.id
        }).catch(function (err) {
            console.log('Erro ao criar Fornecedor')
            console.log(err, req.body)
        });

        return res.redirect('/login')
    },
    login: (req, res) => {
        
        return res.render('login', { title: 'Login'})
    },
    auth: async (req, res) => {
        const { email, password } = req.body;

        const usuario = await Usuario.findAll({
            where: { email }
        });

        if (usuario && bcrypt.compareSync(password, usuario.senha)) {
            req.session = usuarioEncontrado;
            res.redirect('/admin');
        } else {
            res.redirect('/login');
        }
    },
    forgotpassword: (req,res)=> {
        return res.render('esqueci-senha', {title: 'Esqueci senha'})
    },
    recuperarsenha: (req, res) => {
        return res.render('recuperar-senha', { title: 'Recuperar senha'})
    }
};

module.exports = institutionalController;