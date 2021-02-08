const UserSchema = require("../models/User.Model");

async function Create(res, email, tags) {
  let create = await UserSchema.findOne({ email });
  if (create) {
    res.status(400).json({ msg: "User already existe" });
  } else {
    create = new UserSchema(tags).save();
  }

  return create || {};
}

async function Users() {
  const users = await UserSchema.find();
  return users || [];
}

async function User(id) {
  const user = await UserSchema.findById(id);
  return user || {};
}

module.exports = { Create, Users, User };
