module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/portfolio", function(req, res) {
    res.render("portfolio");
  });

  app.get("/contactMe", function(req, res) {
    res.render("contactMe");
  });
};
