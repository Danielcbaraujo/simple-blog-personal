const articleService = require("../services/articleService");

function home(req, res) {

  const articles =
    articleService.getAllArticles();

  res.render("home", {
    articles,
  });
}

function article(req, res) {

  const id = req.params.id;

  const article =
    articleService.getArticleById(id);

  res.render("article", {
    article,
  });
}
module.exports = {
  home,
  article,
};