const loginController = {
    login: (req, res) => {
        return res.render('login', { title: 'Login'})
    }
}; 

module.exports = loginController;