const main = require("./src/main");

module.exports.mailer = async (event, context) => {
  return main.start();
};
