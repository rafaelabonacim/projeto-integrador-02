var express = require('express');
var router = express.Router();

// Importação das Controllers
const institutionalController = require('../controllers/institutionalController');
const loginController = require('../controllers/loginController');

// Rotas para páginas institucionais
router.get('/', institutionalController.index);
router.get('/anuncie', institutionalController.anuncie);


// Rotas para páginas de login
router.get('/login',loginController.login);



module.exports = router;
