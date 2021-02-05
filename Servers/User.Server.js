const UserSchema = require("../models/User.Model");

async function Create(tags) {
  const user = await new UserSchema(tags).save();
  return user || {};
}

async function User() {
  const user = await UserSchema.find();
  return user || {};
}

module.exports = { Create, User };
