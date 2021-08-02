const bcrypt = require('bcrypt');
const config = require('../database/config/config');
const { AreaDeAtendimento, Cliente, Endereco, Fornecedor, Orcamento, Plano, PlanoFornecedor, TipoUsuario, Usuario, FornecedorHasArea, FornecedorHasRamo } = require('../database/models');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const adminController = {
    index: (req, res) => {
        return res.status(200).render('admin/index', { title: 'Painel Administrativo'})
    },
    listarFornecedor: async (req, res) => {
        const fornecedores = await Fornecedor.findAll({
        include: ['usuario', 'plano_contratado'],
            order: [['usuario', 'nome', 'ASC']],
            limit: 30,
        });

        return res.status(200).render('admin/listarFornecedor', { title: 'Lista de Fornecedores', fornecedores: fornecedores});
    },
    buscarFornecedor: async (req, res) => {
        let { id, name, choosePlan, state, city, date } = req.query;

        id = id ? id : "";
        name = name ? name : "";
        choosePlan = choosePlan ? choosePlan : "";
        date = date ? date : "";

        const buscaFornecedores = await Fornecedor.findAll({
            include: [{
                model: Usuario,
                as: 'usuario',
                where: {
                    nome: { [Op.like]: `%${name}%` }
                }
            
            },
            {
                model: PlanoFornecedor,
                as: 'plano_contratado',
                where: {
                    [Op.or]: [
                        { nome: { [Op.like]: `${choosePlan}`}},
                        { data_fim: { [Op.like]: `${date}`}}
                    ]
                }
            
            }],
            where: {
                id: { [Op.like]: `%${id}%` }
            },
            order: [['usuario', 'nome', 'ASC']],
        });

        return res.status(200).render('admin/listarFornecedor', { title: 'Lista de Fornecedores', fornecedores: buscaFornecedores})
    },
    adicionarFornecedor: async (req, res) => {
        return res.status(200).render('admin/adicionarFornecedor', { title: 'Adicionar Fornecedor'})
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
        const {id} = req.params;
        
        const fornecedor = await Fornecedor.findByPk(id,{
            include: ['usuario','endereco', 'area', 'ramo_atendimento', 'plano_contratado']
        });

        // const branchIds = [];
        // const branchData = fornecedor.ramo_atendimento
        
        // for (let i = 0; i < branchData.length; i++) {
        //     branchIds.push(fornecedor.ramo_atendimento[i].fornecedor_has_ramo.ramo_atendimento_id)
        // };
        
        return res.status(200).render('admin/editarFornecedor', { title: 'Editar Fornecedor', fornecedor: fornecedor})
    },
    atualizarFornecedor: async (req, res) => {
        const { id } = req.params;
        const { branch, name, document, email, phone, whatsapp, password, zipcode, address, number, complement, district, state, city, stateArea } = req.body;
        
        const cadastroRegex = /[ \(\)\x2D-\/]/g;

        console.log(req.body);

        const fornecedorAtualizado = await Fornecedor.update({
            telefone: phone.replace(cadastroRegex,''),
            whatsapp: whatsapp.replace(cadastroRegex,''),
            cnpj: document.replace(cadastroRegex, ''),
        },
        {
            where: { id }
        }).catch(function (err) {
            console.log('Erro ao atualizar Fornecedor')
        });

        // const usuarioAtualizado = await Usuario.update({
        //     nome: name,
        //     email,
        //     senha: bcrypt.hashSync(password, 10),
        // },
        // {
        //     where: { id }
        // }).catch(function (err) {
        //     console.log('Erro ao atualizar usuário', err)
        // });

        // const enderecoAtualizdo = await Endereco.update({
        //     cep: zipcode.replace(cadastroRegex,''),
        //     logradouro: address,
        //     complemento: complement,
        //     bairro: district,
        //     numero: parseInt(number),
        //     estado: state,
        //     cidade: city
        // },
        // {
        //     where: { id }
        // }).catch(function (err) {
        //     console.log('Erro ao atualizar Endereço', err)
        // });

        // // Areas de atendimento
        // const areas = Array.isArray(stateArea) ? stateArea : [stateArea]

        // for(const state of areas){
        //     await FornecedorHasArea.update({
        //         fornecedor_id: fornecedorCriado.id,
        //         area_de_atendimento_id: state
        //     },
        //     {
        //         where: { id }
        //     }).catch(function (err) {
        //         console.log('Erro ao atualizar Área de Atendimento', err)
        //     });
        // };

        // // Ramo de Atuacao
        // const ramos = Array.isArray(branch) ? branch : [branch]

        // for(const ramo of ramos){
        //     await FornecedorHasRamo.update({
        //         fornecedor_id: fornecedorCriado.id,
        //         ramo_atendimento_id: ramo
        //     },
        //     {
        //         where: { id }
        //     }).catch(function (err) {
        //         console.log('Erro ao atualizar Área de Atendimento', err)
        //     });
        // };

        return res.status(200).redirect('admin/listarFornecedor')
    },
    excluirFornecedor: async (req,res) => {
        const { id } = req.params;
        
        const fornecedor = await Fornecedor.destroy({
            where: { id }
        });
        
        return res.redirect('/admin/listarFornecedor')
    },
    listarCliente: async (req, res) => {
        const clientes = await Cliente.findAll({
            include: ['usuario'],
            order: [['id', 'ASC']]
            
        });

        return res.render('admin/listarCliente', { title: 'Listar Clientes', clientes:clientes})
    },
    adicionarCliente: async (req,res) => {
        return res.render('admin/adicionarCliente', { title: 'Adicionar Clientes'})
    },
    salvarCliente: async(req, res) => {
        const{name,email, phone, whatsapp, password, zipcode, address, numero, complement, district, state, city} = req.body
        
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
            numero: Number(numero),
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
        
        return res.redirect('/admin/listarCliente')
    },
    editarCliente: async (req,res) => {
        const {id} = req.params;
        
        const cliente = await Cliente.findByPk(id,{
            include: ['usuario','endereco']
        });
        //return res.json(cliente).status(200);

        return res.render('admin/editarCliente', {cliente:cliente})
    
    },
    atualizarCliente: async (req,res) => {
        const{name,email, phone, whatsapp, password, zipcode, address, numero, complement, district, state, city} = req.body
        const {id} = req.params;

        const usuarioAtualizado = await Usuario.update({
            nome: name,
            email,
            senha: bcrypt.hashSync(password, 10),
            tipo_usuario_id: 1,
        },{
            where: {id}
        }).catch(function (err) {
            console.log('Erro ao editar usuário', err)
        });

        const enderecoAtualizado = await Endereco.update({
            cep: zipcode,
            logradouro: address,
            numero: Number(numero),
            complemento: complement,
            bairro: district, 
            estado:state,
            cidade: city      
        },{
            where: {id}
        }).catch(function (err) {
            console.log('Erro ao editar Endereço', err)
        });

        const clienteAtualizado = await Cliente.update({
            telefone: phone,
            whatsapp: whatsapp,
            usuario_id: usuarioCriado.id,
            endereco_id: enderecoCriado.id
        }, {
            where: {id}
        }).catch(function (err) {
            console.log('Erro ao criar Fornecedor')
            console.log(err, req.body)
        });
        //return res.json(clienteAtualizado);
        
        return res.redirect('admin/listarCliente')
    },
    excluirCliente: async (req,res) =>{
        const {id} = req.params;

        const cliente = await Cliente.destroy({
            where:{id}
        });
        return res.json(cliente);
    
    },

    listarOrcamentos:  (req, res) => {
        return res.render('admin/listarOrcamentos', { title: 'Listar Orçamentos'})
    },
    orcamentoDetalhado:  (req, res) => {
        return res.render('admin/orcamentoDetalhado', { title: 'Orçamento Detalhado'})
    },

};

module.exports = adminController;