var express = require('express');
var router = express.Router();

const validaLogin = require('../middlewares/auth');
const adminController = require('../controllers/adminController');

// router.use(validaLogin);

// Roras inicial do Admin
router.get('/', adminController.index);

// Rotas de Fornecedores
router.get('/listarFornecedor', adminController.listarFornecedor);
router.get('/listarFornecedor/resultado', adminController.buscarFornecedor);
router.get('/adicionarFornecedor', adminController.adicionarFornecedor);
router.post('/adicionarFornecedor', adminController.adicionarFornecedorCreate);
router.get('/editarFornecedor/:id', adminController.editarFornecedor);
router.put('/editarFornecedor/:id', adminController.atualizarFornecedor);
router.delete('/deletarFornecedor/:id', adminController.excluirFornecedor);


// Rotas de Clientes
router.get('/listarCliente', adminController.listarCliente);

router.get('/adicionarCliente', adminController.adicionarCliente);
router.post('/adicionarCliente', adminController.salvarCliente);

router.get('/editarCliente/:id', adminController.editarCliente);
router.put('/editarCliente/:id', adminController.atualizarCliente);

router.delete('/listarCliente/deletar/:id', adminController.excluirCliente);

 
// Rotas orçamentos
router.get('/listarOrcamentos', adminController.listarOrcamentos);
router.get('/orcamentoDetalhado', adminController.orcamentoDetalhado);

module.exports = router;