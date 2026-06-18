const express = require("express");
const session = require("express-session");

const publicRoutes = require("./routes/publicRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

const PORT = 3000;

app.set("view engine", "ejs");// para usar o view  tem outras 

app.use(express.urlencoded({ extended: true }));// Para usar formularios

app.use(express.static("public"));// "Tudo que estiver dentro da pasta public pode ser acessado pelo navegador."

app.use(
  session({
    secret: "blog-secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(publicRoutes);
app.use(adminRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});