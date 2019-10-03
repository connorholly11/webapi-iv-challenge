require("dotenv").config();
const express = require("express");
const defaults = require("./api/configs/defaults");

const server = express();

server.listen(defaults.port, () => {
  console.log(`API running on port ${defaults.port}`);
});
