
const articleService = require("../services/articleService");

function login(req, res) {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    req.session.isAdmin = true;

    return res.redirect("/admin");
  }

  res.send("Usuário ou senha inválidos");
}

function loginPage(req, res) {
  res.render("login");
}



function dashboard(req, res) {
  const articles = articleService.getAllArticles();

  res.render("admin", {
    articles,
  });
}
function newArticlePage(req, res) {
  res.render("new");
}

function createArticle(req, res) {

  articleService.createArticle(
    req.body
  );

  res.redirect("/admin");

}

function editPage(req, res) {

  const id = req.params.id;

  const article =
    articleService.getArticleById(id);

  res.render("edit", {
    article
  });

}

function updateArticle(req, res) {

  const id = req.params.id;

  articleService.updateArticle(
    id,
    req.body
  );

  res.redirect("/admin");

}

function deleteArticle(req,res){
  const id=req.params.id;
  articleService.deleteArticle(id)
  res.redirect("/admin")
}

module.exports = {
  loginPage,
  login,
  dashboard,
  newArticlePage,
  createArticle,
  editPage,
  updateArticle,
  deleteArticle
};