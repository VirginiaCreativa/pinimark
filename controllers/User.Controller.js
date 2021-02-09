const UserServices = require("../services/User.Server");

exports.CreateUser = (req, res) =>
  new Promise((resolve, reject) => resolve(UserServices.Create(req, res)));

exports.getUsers = (tags) =>
  new Promise((resolve, reject) => resolve(UserServices.Users(tags)));

exports.getUser = (id) =>
  new Promise((resolve, reject) => resolve(UserServices.User(id)));

exports.getUserUpdate = (req, res) =>
  new Promise((resolve, reject) => resolve(UserServices.UserUpdate(req, res)));

exports.getLogin = (req, res) =>
  new Promise((resolve, reject) => resolve(UserServices.Login(req, res)));
