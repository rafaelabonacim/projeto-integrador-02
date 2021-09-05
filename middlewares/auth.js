const auth = (req, res, next) => {
  res.locals.userSession = {};

  if (req.path.includes('/admin') && !req.session.loggedUser) {
    return res.redirect('/login');
  }

  if (req.session.loggedUser) {
    res.locals.userSession = req.session;
  }

  next();
};

module.exports = auth;
