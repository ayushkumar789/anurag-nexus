function ensureAuthenticated(req, res, next) {
    if (req.session.user) {
        return next();
    } else {
        return res.redirect('/login.html');
    }
}

module.exports = ensureAuthenticated;
