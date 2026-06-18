const fs = require("fs");
const path = require("path");

const articlesPath = path.join(__dirname, "../data/articles");

function getAllArticles() {

  const files = fs.readdirSync(articlesPath);

  const articles = files.map((file) => {

    const filePath = path.join(articlesPath, file);

    const content = fs.readFileSync(filePath, "utf-8");

    return JSON.parse(content);

  });

  return articles;
}

function getArticleById(id) {

  const filePath =
    path.join(articlesPath, `${id}.json`);  
                                             
  const content =
    fs.readFileSync(filePath, "utf-8");

  return JSON.parse(content);
}
function createArticle(article) {

  const files =
    fs.readdirSync(articlesPath);

  const ids = files.map(file =>
    parseInt(file.replace(".json", ""))
  );

  const newId =
    ids.length > 0
      ? Math.max(...ids) + 1
      : 1;

  const newArticle = {
    id: newId,
    title: article.title,
    content: article.content,
    date: article.date
  };

  const filePath =
    path.join(
      articlesPath,
      `${newId}.json`
    );

  fs.writeFileSync(
    filePath,
    JSON.stringify(newArticle, null, 2)
  );

}

function updateArticle(id, articleData) {

  const updatedArticle = {
    id: parseInt(id),
    title: articleData.title,
    content: articleData.content,
    date: articleData.date
  };

  const filePath =
    path.join(
      articlesPath,
      `${id}.json`
    );

  fs.writeFileSync(
    filePath,
    JSON.stringify(updatedArticle, null, 2)
  );

}

function deleteArticle(id) {

  const filePath =
    path.join(
      articlesPath,
      `${id}.json`
    );

  fs.unlinkSync(filePath);

}

module.exports = {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle
};