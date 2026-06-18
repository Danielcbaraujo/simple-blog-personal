const express = require("express");

const router = express.Router();

const publicController = require("../controllers/publicController");


router.get("/", publicController.home);
router.get( "/article/:id",publicController.article);


module.exports = router;
 