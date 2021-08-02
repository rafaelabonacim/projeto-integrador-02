const auth = (req,res,next) => {
    if (req.session.usuarioLogado && req.session.usuarioLogado !== undefined) {
        console.log('Você está logado')
        next();
    } else {
        res.redirect('/login');
    }
}

module.exports = auth;