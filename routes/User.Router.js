const express = require("express");
const response = require("../middlewares/Response");
const UserController = require("../controllers/User.Controller");
const UserValidate = require("../models/User.Validation.Model");

function UserRouter(app) {
  const router = express.Router();
  app.use("/login", router);

  router.get("/", (req, res, next) => {
    MoviesControllers.getUser()
      .then((data) => response.success(req, res, data, "Existe User"))
      .catch((err) =>
        response.error(req, res, "Infomacion invalida", 400, err)
      );
  });

  router.post("/", async (req, res, next) => {
    const userAdd = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      avatar: req.body.avatar,
    };
    UserController.CreateUser(userAdd)
      .then((data) => {
        const result = UserValidate.validateAsync(req.body, userAdd);
        console.log(result);
        response.success(req, res, data, "Create User", 201);
      })
      .catch((err) =>
        response.error(req, res, "Infomacion invalida", 400, err)
      );
  });
}

module.exports = UserRouter;
