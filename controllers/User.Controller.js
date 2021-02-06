const UserServices = require("../services/User.Server");

exports.CreateUser = (tags) =>
  new Promise((resolve, reject) => resolve(UserServices.Create(tags)));

exports.getUser = () =>
  new Promise((resolve, reject) => resolve(UserServices.User()));
