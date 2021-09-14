var express = require('express');
var router = express.Router();

// Importação das Controllers
const auth = require('../middlewares/auth');
const institutionalController = require('../controllers/institutionalController');

router.use(auth);

// Rotas para páginas institucionais
router.get('/', institutionalController.index);
router.get('/anuncie', institutionalController.anuncie);
router.get('/perfilCadastro', institutionalController.perfil);

// Rotas para páginas de login
router.get('/login', institutionalController.login);
router.post('/login', institutionalController.auth);
router.get('/esqueci-senha', institutionalController.forgotpassword);

// Rotas para páginas de cadastro
router.get('/cadastro-fornecedor', institutionalController.cadastroFornecedor);
router.post(
  '/cadastro-fornecedor',
  institutionalController.cadastroFornecedorCreate,
);

router.get('/cadastro-cliente', institutionalController.cadastrocliente);
router.post('/cadastro-cliente',institutionalController.cadastroclienteCreate);

router.post('/cadastro-orcamento', institutionalController.orcamentoCreate);

// Rotas do link que será enviado para o email
router.get('/recuperar-senha', institutionalController.recuperarsenha);

// Rotas para página de Parceiros
router.get('/parceiros', institutionalController.parceiros);
router.get('/parceiros/resultado/', institutionalController.parceirosBusca);

//Logout
router.post('/login/sair', institutionalController.sair);

module.exports = router;
