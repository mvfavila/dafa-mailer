const mongoose = require("mongoose");
const log = require("./util/log");

const Client = mongoose.model("Client");
// const Client = require("./models/Client");

const repository = {
  async getWarnings() {
    return new Promise(async (resolve, reject) => {
      log.info("Fetching clients");
      const clients = await Client.find({
        active: true
      }).populate("fields");

      log.info(`Found [${clients.length}] clients`);

      if (!clients) return reject(new Error("Client not found"));
      return resolve(clients);
    });
  }
};

module.exports = repository;
