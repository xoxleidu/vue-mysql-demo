const express = require("express");
const router = express.Router();
const service = require("./service");

router.post("/addUser", (req, res, next) => {
  service.addUser(req, res, next);
});

router.get("/delUser", (req, res, next) => {
  service.delUser(req, res, next);
});

router.post("/updataUser", (req, res, next) => {
  service.updataUser(req, res, next);
});

router.get("/getUser", (req, res, next) => {
  service.getUser(req, res, next);
});

module.exports = router;
