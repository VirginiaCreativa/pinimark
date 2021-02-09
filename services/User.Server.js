const UserSchema = require("../models/User.Model");

async function Create(res, tags) {
  let create = await UserSchema.findOne({ email: tags.email });
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

async function UserUpdate(id, tags) {
  console.log(">>>>>", id);
  const update = await UserSchema.findById(id).then((data) => {
    console.log(data);
    // data
    //   .save()
    //   .then(() => console.log("Udpate"))
    //   .catch((err) => console.log(err));
  });
  return update || {};
}

module.exports = { Create, Users, User, UserUpdate };
