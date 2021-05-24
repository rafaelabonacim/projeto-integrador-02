const cadastroController = {
    cadastro: (req, res) => {
        return res.render('cadastro', { title: 'Cadastro'})
    }
}; 

module.exports = cadastroController;