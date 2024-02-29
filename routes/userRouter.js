const express = require("express");
const userController = require("../controllers/userController.js");
const userRouter = express.Router();

userRouter
  .get("/signIn", userController.signInForm)
  .post("/signIn", userController.signIn)
  .post("/logout", userController.logout);

userRouter
  .get("/signUp", userController.signUpForm)
  .post("/signUp", userController.signUp);

userRouter.get(
  "/profile",
  userController.authenticateToken,
  userController.profile
);

userRouter.post("/editProfile", userController.editProfile);

module.exports = userRouter;
