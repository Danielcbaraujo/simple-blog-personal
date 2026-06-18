const express = require("express");

const router = express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const adminController =
  require("../controllers/adminController");

router.get(
  "/login",
  adminController.loginPage
);

router.post(
  "/login",
  adminController.login
);

router.get("/admin", 
  authMiddleware, 
  adminController.dashboard)

router.get(
  "/new",
  authMiddleware,
  adminController.newArticlePage
);

router.post(
  "/new",
  authMiddleware,
  adminController.createArticle
);

router.get(
  "/edit/:id", 
  adminController.editPage);

  router.post(
  "/edit/:id",
  authMiddleware,
  adminController.updateArticle
);

router.post(
  "/delete/:id",
  authMiddleware,
  adminController.deleteArticle
);
module.exports = router;