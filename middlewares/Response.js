const chalk = require("chalk");

exports.success = (req, res, data, msg, status = 200) => {
  return res.status(status).send({
    message: msg,
    data,
  });
};

exports.error = (req, res, msg, status = 500, detail) => {
  console.log(
    chalk
      .bgHex("#e03325")
      .hex("#fff")
      .bold(`!!!! ==> [Response error] ====> ${detail}`)
  );

  res.status(status).json({
    error: msg,
    data: "",
  });
};

exports.delete = (req, res, status = 200) => {
  res.status(status).send({
    delete: "Delete",
    data: req.body,
  });
};
