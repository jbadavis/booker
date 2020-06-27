const createTables = require("./db/createTables");
const server = require("./server");

const app = async () => {
  await createTables();

  server();
};

module.exports = app;
