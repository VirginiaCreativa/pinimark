const express = require("express");

const app = express();
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

// ====== CONTROLLERS ROUTES ====== //
UserRouter(app);

app.get("/", (req, res, next) => {
  res.send("Santi, eres mariquita");
});

app.listen(config.port, () => {
  console.log(
    chalk.hex("#fff").bgBlue.bold(`listening http://localhost:${config.port}`)
  );
});
