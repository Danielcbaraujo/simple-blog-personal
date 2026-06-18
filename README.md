# 📝 Personal Blog

Um blog pessoal desenvolvido com **Node.js**, **Express** e **EJS**, permitindo criar, editar, visualizar e excluir artigos através de uma área administrativa protegida por autenticação.

---

## 📸 Preview

### Área Pública
- Listagem de artigos publicados
- Visualização completa de artigos
- Exibição da data de publicação

### Área Administrativa
- Login do administrador
- Painel de gerenciamento
- Criar artigos
- Editar artigos
- Excluir artigos

---

## 🚀 Funcionalidades

### Visitantes

- Visualizar todos os artigos publicados
- Ler artigos completos
- Navegação simples e intuitiva

### Administrador

- Login protegido por sessão
- Criar novos artigos
- Atualizar artigos existentes
- Excluir artigos
- Gerenciar todo o conteúdo do blog

---

## 🛠 Tecnologias Utilizadas

- Node.js
- Express.js
- EJS
- Express Session
- HTML5
- CSS3
- JavaScript
- File System (fs)

---

## 📂 Estrutura do Projeto

```text
personal-blog/
│
├── controllers/
│   ├── adminController.js
│   └── publicController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── routes/
│   ├── adminRoutes.js
│   └── publicRoutes.js
│
├── services/
│   └── articleService.js
│
├── data/
│   └── articles/
│       ├── 1.json
│       ├── 2.json
│       └── ...
│
├── views/
│   ├── home.ejs
│   ├── article.ejs
│   ├── login.ejs
│   ├── admin.ejs
│   ├── new.ejs
│   └── edit.ejs
│
├── app.js
├── package.json
└── README.md
```

---

## 📄 Como os Artigos São Armazenados

Cada artigo é salvo em um arquivo JSON dentro da pasta:

```text
data/articles/
```

Exemplo:

```json
{
  "id": 1,
  "title": "Meu Primeiro Artigo",
  "content": "Conteúdo do artigo...",
  "date": "2026-06-18"
}
```

---

## 🔐 Credenciais de Acesso

```text
Usuário: admin
Senha: 1234
```

> As credenciais estão definidas diretamente no código para fins de estudo.

---

## ⚙️ Instalação

### Clonar o repositório

```bash
git clone https://github.com/seu-usuario/personal-blog.git
```

### Entrar na pasta do projeto

```bash
cd personal-blog
```

### Instalar dependências

```bash
npm install
```

### Executar a aplicação

```bash
npm start
```

ou

```bash
node app.js
```

---

## 🌐 Rotas

### Públicas

| Método | Rota | Descrição |
|---------|---------|---------|
| GET | / | Página inicial |
| GET | /article/:id | Visualizar artigo |

### Administrativas

| Método | Rota | Descrição |
|---------|---------|---------|
| GET | /login | Tela de login |
| POST | /login | Autenticação |
| GET | /admin | Dashboard |
| GET | /new | Formulário de criação |
| POST | /new | Criar artigo |
| GET | /edit/:id | Formulário de edição |
| POST | /edit/:id | Atualizar artigo |
| POST | /delete/:id | Excluir artigo |

---

## 🏗 Arquitetura

O projeto segue uma arquitetura inspirada no padrão MVC:

```text
Request
   ↓
Routes
   ↓
Middleware
   ↓
Controller
   ↓
Service
   ↓
JSON Files
   ↓
View (EJS)
   ↓
Response
```

---

## 📚 Conceitos Praticados

- CRUD Completo
- Node.js
- Express
- Middleware
- Sessões
- Rotas Dinâmicas
- Manipulação de Arquivos
- Template Engine (EJS)
- Organização de Projetos Backend
- Arquitetura MVC

---

## 🎯 Melhorias Futuras

- Logout
- Busca de artigos
- Categorias
- Tags
- Comentários
- Upload de imagens
- Banco de dados SQLite
- Banco de dados PostgreSQL
- API REST
- Painel administrativo avançado

---

## 👨‍💻 Autor

Desenvolvido por **Daniel** como projeto de estudos para aprimorar conhecimentos em:

- JavaScript
- Node.js
- Express.js
- Desenvolvimento Backend

---

⭐ Se gostou do projeto, deixe uma estrela no repositório.
