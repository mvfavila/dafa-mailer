// const express = require("express"); // create our app w/ express
// const compression = require("compression");
// const mongoose = require("mongoose");
// const session = require("express-session");
// const MongoDBStore = require("connect-mongodb-session")(session);

// const app = express();
// app.use(compression());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// const log = require("./src/util/log");

// log.info(`Adding models`);
// // require models
// require("./src/models/AlertType");
// require("./src/models/Client");
// require("./src/models/Event");
// require("./src/models/EventType");
// require("./src/models/EventWarning");
// require("./src/models/Field");

const mongoose = require("mongoose");
const bootstrap = require("./src/config/bootstrap");
const log = require("./src/util/log");

module.exports.mailer = async (event, context) => {
  log.info(`Starting ${new Date()}`);

  await bootstrap.init();

  await runPromise();

  log.info(`Finishing ${new Date()}`);
};

async function runPromise() {
  return new Promise(async (resolve, reject) => {
    try {
      const M = mongoose.model("Client");

      const doc = await M.find();
      console.log(`Result: ${JSON.stringify(doc)}`);
      bootstrap.teardown();

      resolve(doc);
    } catch (error) {
      log.info(`Error caught: ${JSON.stringify(error)}`);
      reject(error);
    }
  });
}
