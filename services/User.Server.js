const UserSchema = require("../models/User.Model");
const jwt = require("jsonwebtoken");
const { config } = require("../config/config");

async function Create(req, res) {
  const { name, email, password, avatar } = req.body;

  let create = await UserSchema.findOne({ email });
  if (create) {
    res.status(400).send({ message: "User already existe" });
  } else {
    create = await new UserSchema({ name, email, password, avatar })
      .save()
      .then((items) => {
        const payload = { user: { id: items.email } };
        jwt.sign(
          payload,
          config.jwtSecret,
          { expiresIn: 36000 },
          (err, token) => {
            if (err) {
              throw err;
            } else {
              res.status(201).send({
                message: "Save new user",
                data: items,
                token,
              });
            }
          }
        );
      })
      .catch((err) => res.status(201).send({ message: err }));
  }

  return create || {};
}

async function Users() {
  const users = await UserSchema.find();
  return users || [];
}

async function User(id) {
  const user = await UserSchema.findById(id).select("-password");
  return user || {};
}

async function UserUpdate(req, res) {
  const { name, email, password, avatar } = req.body;
  const update = await UserSchema.findById(req.params.id).then((data) => {
    data.name = name;
    data.email = email;
    data.password = password;
    data.avatar = avatar;

    data
      .save()
      .then((items) =>
        res.status(201).send({ message: "Update ID", data: items })
      )
      .catch((err) => res.status(201).send({ message: err }));
  });
  return update || {};
}

module.exports = { Create, Users, User, UserUpdate };
