exports.notFound = (req, res, next) => {
    res.status(404).render('pages/404');
};