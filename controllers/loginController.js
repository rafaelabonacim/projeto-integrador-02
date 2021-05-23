const loginController = {
    login: (req, res) => {
        return res.render('login', { title: 'Login'})
    },
    forgotpassword: (req,res)=> {
        return res.render('esquecisenha', {title: 'Esqueci senha'})
    }
}; 

module.exports = loginController;