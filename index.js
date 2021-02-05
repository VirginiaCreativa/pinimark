const express = require("express");

const app = express();
const chalk = require("chalk");

const { config } = require("./config/config");

app.get("/", (req, res, next) => {
  res.send("Hello Word");
});

app.listen(config.port, () => {
  console.log(
    chalk.hex("#fff").bgBlue.bold(`litening http://localhost:${config.port}`)
  );
});
