var express = require('express');
var router = express.Router();

// Importação das Controllers
const institutionalController = require('../controllers/institutionalController');
const loginController = require('../controllers/loginController');
const cadastroController = require('../controllers/cadastroController');

// Rotas para páginas institucionais
router.get('/', institutionalController.index);
router.get('/anuncie', institutionalController.anuncie);


// Rotas para páginas de login
router.get('/login',loginController.login);

// Rotas para páginas de cadastro
router.get('/register-type',cadastroController.cadastro);



module.exports = router;
