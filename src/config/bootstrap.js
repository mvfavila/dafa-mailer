const mongoose = require("mongoose");
const environment = require("./environment/environment");

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  bufferCommands: false,
  bufferMaxEntries: 0
};

const bootstrap = {
  init: async function() {
    environment.load();
    const connectionString = process.env.MONGODB_URI;

    await mongoose.connect(connectionString, options);
    const modelNames = mongoose.modelNames();
    if (modelNames.indexOf("Client") === -1) {
      mongoose.model(
        "Client",
        new mongoose.Schema({
          firstName: String,
          lastName: String,
          company: String,
          address: String,
          city: String,
          state: String,
          postalCode: String,
          email: String,
          fields: [String],
          createdAt: Date,
          updatedAt: Date,
          active: Boolean
        })
      );
    }
  },

  teardown: async function() {
    await mongoose.connection.close();
  }
};

module.exports = bootstrap;
