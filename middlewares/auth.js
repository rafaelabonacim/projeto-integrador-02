const auth = (req,res,next) => {
    if (req.session.loggedUser !== undefined) {
        next();
    } else {
        res.redirect('/login');
    }
}

module.exports = auth;