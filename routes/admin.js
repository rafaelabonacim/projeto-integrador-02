var express = require('express');
var router = express.Router();

// Importação das Controllers
const adminController = require('../controllers/adminController');

// Roras inicial do Admin
router.get('/', adminController.index);

// Rotas de Fornecedores
router.get('/listarFornecedor', adminController.listarFornecedor);

router.get('/adicionarFornecedor', adminController.adicionarFornecedor);
router.post('/adicionarFornecedor', adminController.salvarFornecedor);

router.get('/editarFornecedor', adminController.editarFornecedor);
router.put('/editarFornecedor', adminController.atualizarFornecedor);

router.delete('/excluirFornecedor', adminController.atualizarFornecedor);
router.delete('/listarFornecedor/deletar/:id', adminController.excluirFornecedor);

module.exports = router;