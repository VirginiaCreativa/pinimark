const mongoose = require("mongoose");
const chalk = require("chalk");
const { config } = require("../config/config");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const HOST = config.dbHost;
const DB_NAME = config.dbNameUsers;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DB_NAME}`;

class MongooseLib {
  constructor() {
    this.client = mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  connect() {
    this.client.Promise = global.Promise;
    this.client
      .then((res) =>
        console.log(chalk.hex("#333").bgGreen.bold("Connected to DB"))
      )
      .catch((err) => {
        console.log(chalk.hex("#fff").bgRed.bold(err));
        process.exit(1);
      });
  }
}

module.exports = MongooseLib;
