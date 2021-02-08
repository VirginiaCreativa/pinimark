const express = require("express");
const response = require("../middlewares/Response");
const ValidationHandler = require("../middlewares/ValidationHandler");
const UserController = require("../controllers/User.Controller");
const UserValidateSchema = require("../models/User.Validation.Model");

function UserRouter(app) {
  const router = express.Router();
  app.use("/login", router);

  router.get("/", (req, res, next) => {
    UserController.getUsers()
      .then((data) => response.success(req, res, data, "Users"))
      .catch((err) =>
        response.error(req, res, "Infomacion invalida", 400, err)
      );
  });

  router.get("/:id", (req, res, next) => {
    UserController.getUser(req.params.id)
      .then((data) => response.success(req, res, data, "User"))
      .catch((err) =>
        response.error(req, res, "Infomacion invalida", 400, err)
      );
  });

  router.post("/", ValidationHandler(UserValidateSchema), (req, res, next) => {
    const userAdd = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      avatar: req.body.avatar,
    };

    UserController.CreateUser(res, userAdd.email, userAdd)
      .then((data) => {
        response.success(userAdd.email, res, data, "Create User", 201);
      })
      .catch((err) => {
        response.error(req, res, "Infomacion invalida", 400, err);
      });
  });
}

module.exports = UserRouter;
