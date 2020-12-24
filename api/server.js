const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mung = require("express-mung");
const logger = require("./utils/logger");
//const eventLogger = require("./utils/event-logger");
const v1 = require("./routes/v1");

const port = process.env.PORT || 3000;
const app = express();



//app.use(mung.json(eventLogger.log));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Create a server side router
v1(app);

// Start the server
app.listen(port, () => {
  logger.info(`Server listening on port ${port}`);
});

module.exports = app;
