const repository = require("./repository");

module.exports.start = async () => {
  // let warnings = [];
  // repository.getWarnings().subscribe(w => (warnings = w));

  // log.info(`Number of warnings returned: [${warnings.length}]`);

  console.log("Hello, world!");
  return true;
};
