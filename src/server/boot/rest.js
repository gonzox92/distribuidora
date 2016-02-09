module.exports = function (app) {
  app.all('/api/*', function (req, res, next) {
    console.log(req.method + ': ' + req.originalUrl);
    next();
  });
};