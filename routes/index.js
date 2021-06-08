var express = require('express');
var router = express.Router();

// Importação das Controllers
const institutionalController = require('../controllers/institutionalController');

// Rotas para páginas institucionais
router.get('/', institutionalController.index);
router.get('/anuncie', institutionalController.anuncie);
router.get('/perfilCadastro', institutionalController.perfil);

// Rotas para páginas de login
router.get('/login', institutionalController.login);
router.get('/esqueci-senha', institutionalController.forgotpassword)

// Rotas para páginas de cadastro
router.get('/cadastro', institutionalController.cadastro);

// Rotas do link que será enviado para o email
router.get('/recuperar-senha', institutionalController.recuperarsenha);

// Rotas do link que será enviado para o email
router.get('/parceiros', institutionalController.parceiros);

module.exports = router;