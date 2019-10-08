const env = process.env.NODE_ENV.trim();
const vars = require(`./${env}.env.json`);
const log = require("../../util/log");

const environment = {
  load: () => {
    log.info("Loading environment variables");
    process.env.MONGODB_URI = vars.MONGODB_URI;
  }
};

module.exports = environment;
