const { check } = require('express-validator');

const validacaoFornecedores = [
    check('plan').notEmpty().withMessage('Campo obrigatório'),
    check('branch').notEmpty().withMessage('Campo obrigatório'),
    check('name').notEmpty().withMessage('Campo obrigatório'),
    check('document').notEmpty().isLength({ min:18, max: 18 }).withMessage('Campo obrigatório com 18 digitos numéricos'),
    check('email').notEmpty().isEmail().custom(value => { return Usuario.findOne({ where: { email: value }}).then(() => { return Promise.reject('E-mail já cadastrado')})}),
    check('phone').isLength({ min: 14, max: 15 }).withMessage('Você deve divigitar 10 digitos numéricos'),
    check('whatsapp').isLength({ min: 15, max: 15 }).withMessage('Você deve divigitar 11 digitos numéricos'),
    check('password').notEmpty().isLength({ min: 8 }).withMessage('A senha deve ter no mínimo de 8 caracteres'),
    check('zipcode').notEmpty().isLength({ min: 9, max: 9 }).withMessage('O CEP deve ter 8 caracteres'),
    check('address').notEmpty().withMessage('Campo obrigatório'),
    check('number').notEmpty().isLength({ max: 6}).withMessage('Campo obrigatório'),
    check('district').notEmpty().withMessage('Campo obrigatório'),
    check('state').notEmpty().withMessage('Campo obrigatório'),
    check('city').notEmpty().withMessage('Campo obrigatório'),
    check('stateArea').notEmpty().withMessage('Campo obrigatório'),
]