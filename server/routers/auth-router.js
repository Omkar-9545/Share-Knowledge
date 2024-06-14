const HomeCtrl = require("../controllers/auth-controller");

const express = require("express");
const router = express.Router();


router.route("/").get(HomeCtrl);

module.exports = router;