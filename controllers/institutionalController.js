const institutionalController = {
    index: (req, res) => {
        return res.render('index', { title: 'Portal para Cotação em Usinagem'})
    },
    anuncie: (req, res) => {
        return res.render('anuncie', { title: 'Anuncie'})
    },
    parceiros: (req, res) => {
        return res.render('parceiros', { title: 'Parceiros'})
    },
    perfil: (req, res) => {
        return res.render('perfilCadastro', { title: 'Cadastro'})
    },
    cadastro: (req, res) => {
        return res.render('cadastro', { title: 'Cadastro'})
    },
    login: (req, res) => {
        return res.render('login', { title: 'Login'})
    },
    forgotpassword: (req,res)=> {
        return res.render('esqueci-senha', {title: 'Esqueci senha'})
    },
    recuperarsenha: (req, res) => {
        return res.render('recuperar-senha', { title: 'Recuperar senha'})
    }
};

module.exports = institutionalController;