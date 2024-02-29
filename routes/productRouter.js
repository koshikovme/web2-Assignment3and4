const express = require("express");
const productController = require("../controllers/productController.js");
const homeController = require("../controllers/homeController.js");

const productRouter = express.Router();

productRouter
  .get("/plans", homeController.plans)
  .post("/buyProduct", productController.buyProduct);

module.exports = productRouter;
