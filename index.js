require("dotenv").config();
const { version, name } = require("./package.json");
const logger = require("./api/utils/logger");
require("./api/server"); // Start server

logger.info(
  `<<< ${name} v${version} was started in ${process.env.NODE_ENV} environment >>>`
);

logger.info("Starting Server...");