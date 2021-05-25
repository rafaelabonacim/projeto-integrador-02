var express = require('express');
var router = express.Router();

// Importação das Controllers
const institutionalController = require('../controllers/institutionalController');
const loginController = require('../controllers/loginController');
const cadastroController = require('../controllers/cadastroController');
const emailController = require('../controllers/emailController');

// Rotas para páginas institucionais
router.get('/', institutionalController.index);
router.get('/anuncie', institutionalController.anuncie);


// Rotas para páginas de login
router.get('/login',loginController.login);
router.get('/esqueci-senha',loginController.forgotpassword)

// Rotas para páginas de cadastro
router.get('/registrar',cadastroController.cadastro);

// Rotas do link que será enviado para o email
router.get('/recuperar-senha',emailController.recuperarsenha);

module.exports = router;
