const express = require("express");

const app = express();
const path = require("path");
const cors = require("cors");
const logger = require("morgan");
const chalk = require("chalk");
const bodyParser = require("body-parser");

const { config } = require("./config/config");
const MongooseLib = require("./lib/mongoose");
const UserRouter = require("./routes/User.Router");

// ====== CONNECT MONGODB ====== //
const connect = new MongooseLib();
connect.connect();

// ====== MIDDLEWARE ====== //
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

// ====== CLIENT ====== //

// ====== CONTROLLERS ROUTES ====== //
UserRouter(app);

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(config.port, () => {
  console.log(
    chalk.hex("#fff").bgBlue.bold(`listening http://localhost:${config.port}`)
  );
});
