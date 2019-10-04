// const mongoose = require("mongoose");
// // const log = require("../util/log");

// const Client = mongoose.model("Client");

// const mailer = {
//   async getWarnings() {
//     return new Promise(async (resolve, reject) => {
//       const client = await Client.find({
//         active: true
//       }).populate("fields");

//       if (!client) return reject(new Error("Client not found"));
//       return resolve(client);
//     });
//   }
// };

// module.exports = mailer;
