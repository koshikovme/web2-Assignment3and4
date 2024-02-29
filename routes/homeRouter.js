const express = require("express");
const homeController = require("../controllers/homeController.js");
const homeRouter = express.Router();

homeRouter.get("/profile", homeController.profile);
homeRouter.get("/contacts", homeController.contacts);
homeRouter.get("/plans", homeController.plans);
homeRouter.get("/", homeController.main);

module.exports = homeRouter;
