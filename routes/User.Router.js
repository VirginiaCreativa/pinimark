const express = require("express");

const response = require("../middlewares/Response");
const ValidationHandler = require("../middlewares/ValidationHandler");
const UserController = require("../controllers/User.Controller");
const UserValidateSchema = require("../models/User.Validation.Model");

function UserRouter(app) {
  const router = express.Router();
  app.use("/user", router);

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

  router.post(
    "/login/up",
    ValidationHandler(UserValidateSchema),
    (req, res, next) => {
      UserController.CreateUser(req, res);
    }
  );

  router.put(
    "/login/update/:id",
    ValidationHandler(UserValidateSchema),
    (req, res, next) => {
      UserController.getUserUpdate(req, res);
    }
  );
}

module.exports = UserRouter;
