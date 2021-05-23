const emailController = {
    recuperarsenha: (req, res) => {
        return res.render('recuperarsenha', { title: 'Recuperar senha'})
    }
}; 

module.exports = emailController;