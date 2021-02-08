const UserServices = require("../services/User.Server");

exports.CreateUser = (res, email, tags) =>
  new Promise((resolve, reject) =>
    resolve(UserServices.Create(res, email, tags))
  );

exports.getUsers = (tags) =>
  new Promise((resolve, reject) => resolve(UserServices.Users(tags)));

exports.getUser = (id) =>
  new Promise((resolve, reject) => resolve(UserServices.User(id)));
