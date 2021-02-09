const UserServices = require("../services/User.Server");

exports.CreateUser = (res, tags) =>
  new Promise((resolve, reject) => resolve(UserServices.Create(res, tags)));

exports.getUsers = (tags) =>
  new Promise((resolve, reject) => resolve(UserServices.Users(tags)));

exports.getUser = (id) =>
  new Promise((resolve, reject) => resolve(UserServices.User(id)));

exports.getUserUpdate = (id, tags) =>
  new Promise((resolve, reject) => resolve(UserServices.UserUpdate(id, tags)));
