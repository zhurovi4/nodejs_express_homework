
module.exports = {
    clientErrorHandler: function (err, req, res, next) {
        if (req.xhr) {
            res.status(500).send({ error: 'Something failed!' });
          } else {
            next(err);
          }
    },
    errorHandler: function (err, req, res, next) {
        res.status(500);
        res.render('error', { error: err });
    }
}