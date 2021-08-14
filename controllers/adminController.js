const bcrypt = require('bcrypt');
const config = require('../database/config/config');
const { AreaDeAtendimento, Cliente, Endereco, Fornecedor, Orcamento, Plano, PlanoFornecedor, TipoUsuario, Usuario, FornecedorHasArea, FornecedorHasRamo } = require('../database/models');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const adminController = {
    index: (req, res) => {
        const userSession = req.session
        return res.status(200).render('admin/index', { title: 'Painel Administrativo', userSession: userSession})
    },
    listarFornecedor: async (req, res) => {
        const userSession = req.session

        const fornecedores = await Fornecedor.findAll({
        include: ['usuario', 'plano_contratado'],
            order: [['usuario', 'nome', 'ASC']],
            limit: 30,
        });

        return res.status(200).render('admin/listarFornecedor', { title: 'Lista de Fornecedores', fornecedores: fornecedores, userSession: userSession });
    },
    buscarFornecedor: async (req, res) => {
        const userSession = req.session
        
        let { id, name, choosePlan, date } = req.query;

        console.log(req.query)

        // id = id ? id : id = "";
        // name = name ? name :  name = "";
        // choosePlan = choosePlan ? choosePlan : choosePlan = "";
        // date = date ? date : date = "";

        const buscaFornecedores = await Fornecedor.findAll({
            include: [ 
                {
                    model: Usuario,
                    as: 'usuario',
                    where: { nome: { [Op.like]: `%${name}%`} }
                },
                { model: PlanoFornecedor, as: 'plano_contratado',
                    // where: {
                    //     [Op.or]: [
                    //         { nome: { [Op.like]: `${choosePlan}` }},
                    //         { data_fim: { [Op.like]: `%${date}%`}},
                    //     ]
                    // }
                }
            ],
            where: { id },
            order: [['id', 'ASC']],
        });

        return res.status(200).render('admin/listarFornecedor', { title: 'Resultados da Busca de Fornecedores', fornecedores: buscaFornecedores, userSession: userSession})
    },
    adicionarFornecedor: async (req, res) => {
        const userSession = req.session

        const allUsers =[];
        
        // retorno dos Usuários
        const usuarios = await Usuario.findAll();
        
        for (let usuario of usuarios) {
            allUsers.push(usuario.email)
        }

        return res.status(200).render('admin/adicionarFornecedor', { title: 'Adicionar Fornecedor', usuarios: allUsers, userSession: userSession})
    },
    adicionarFornecedorCreate: async (req, res) => {
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

        return res.status(200).redirect('/admin/listarFornecedor')
    },
    editarFornecedor: async (req, res) => {
        const userSession = req.session

        const { id } = req.params;
        const allAreas = []
        const allRamos = []
        const allUsers =[];
        
        const fornecedor = await Fornecedor.findByPk(id,{
            include: ['usuario','endereco', 'area', 'ramo_atendimento', 'plano_contratado']
        });
        
        // retorno das areas de atendimento
        const areas = await FornecedorHasArea.findAll({
            where: { fornecedor_id: id }
        });
        
        for (let area of areas) {
            allAreas.push(area.area_de_atendimento_id)
        }

        // retorno dos ramos
        const ramos = await FornecedorHasRamo.findAll({
            where: { fornecedor_id: id }
        });
        
        for (let ramo of ramos) {
            allRamos.push(ramo.ramo_atendimento_id)
        }

        // retorno dos Usuários
        const usuarios = await Usuario.findAll();
        
        for (let usuario of usuarios) {
            allUsers.push(usuario.email)
        }
        
        return res.status(200).render('admin/editarFornecedor', { title: 'Editar Fornecedor', fornecedor: fornecedor, areas: allAreas, ramos: allRamos, usuarios: allUsers, userSession: userSession})
    },
    atualizarFornecedor: async (req, res) => {
        const { id } = req.params;
        const { branch, name, document, email, phone, whatsapp, password, zipcode, address, number, complement, district, state, city, stateArea } = req.body;
        const fornecedor = await Fornecedor.findByPk(id);
        const usuarioId = fornecedor.usuario_id;
        const usuario = await Usuario.findByPk(usuarioId);
        const endereco = fornecedor.endereco_id;
        const senha = usuario.senha;

        const cadastroRegex = /[ \(\)\x2D-\/]/g;

        const fornecedorAtualizado = await Fornecedor.update({
            telefone: phone.replace(cadastroRegex,''),
            whatsapp: whatsapp.replace(cadastroRegex,''),
            cnpj: document.replace(cadastroRegex, ''),
        }, {
            where: { id }
        }).catch(function (err) {
            console.log('Erro ao atualizar Fornecedor', fornecedorAtualizado)
        });


        const usuarioAtualizado = await Usuario.update({
            nome: name,
            email,
            senha: bcrypt.hashSync(password, 10),
        }, {
            where: { id: usuarioId }
        }).catch(function (err) {
            console.log('Erro ao atualizar usuário', usuarioAtualizado)
        });
        console.log('testeaaaaaaaaaaaaaaaaaaaaaaaaaa')
     
        const enderecoAtualizado = await Endereco.update({
            cep: zipcode.replace(cadastroRegex,''),
            logradouro: address,
            complemento: complement,
            bairro: district,
            numero: parseInt(number),
            estado: state,
            cidade: city
        },
        {
            where: { id: endereco }
        }).catch(function (err) {
            console.log('Erro ao atualizar Endereço', enderecoAtualizado)
        });

        // Areas de atendimento

        // deletar todas areas cadastradas
        const deleteAreas = await FornecedorHasArea.destroy({
            where: { fornecedor_id: id }
        });

        // recriar todas areas com o novo array retornado
        const areas = Array.isArray(stateArea) ? stateArea : [stateArea]

        for(const state of areas){
            await FornecedorHasArea.create({
                fornecedor_id: id,
                area_de_atendimento_id: state
            }).catch(function (err) {
                console.log('Erro ao criar Área de Atendimento', err)
            });
        };


        // Ramo de Atuacao

        // deletar todas ramos cadastrados
        const deleteRamos = await FornecedorHasRamo.destroy({
            where: { fornecedor_id: id }
        });

        // recriar todos ramos com o novo array retornado
        const ramos = Array.isArray(branch) ? branch : [branch]

        for(const ramo of ramos){
            await FornecedorHasRamo.create({
                fornecedor_id: id,
                ramo_atendimento_id: ramo
            }).catch(function (err) {
                console.log('Erro ao criar Área de Atendimento', err)
            });
        };

        return res.status(200).redirect('/admin/listarFornecedor')
    },
    excluirFornecedor: async (req,res) => {
        const { id } = req.params;
        
        const fornecedor = await Fornecedor.destroy({
            where: { id }
        });
        
        return res.redirect('/admin/listarFornecedor')
    },
    listarCliente: async (req, res) => {
        const userSession = req.session
        return res.render('admin/listarCliente', { title: 'Lista de Clientes', userSession: userSession})
    },
    adicionarCliente: (req,res) => {
        const userSession = req.session
        return res.render('admin/adicionarCliente', { title: 'Adicionar Clientes', userSession: userSession})
    },
    editarCliente: async (req,res) => {
        const userSession = req.session
        return res.render('admin/editarCliente', { title: 'Editar Cliente', userSession: userSession})
    },
    listarOrcamentos:  (req, res) => {
        const userSession = req.session
        return res.render('admin/listarOrcamentos', { title: 'Listar Orçamentos', userSession: userSession})
    },
    orcamentoDetalhado:  (req, res) => {
        const userSession = req.session
        return res.render('admin/orcamentoDetalhado', { title: 'Orçamento Detalhado', userSession: userSession})
    }
};

module.exports = adminController;