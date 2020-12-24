const { createLogger, format, transports } = require("winston");

const LOG_LEVEL = process.env.LOG_LEVEL || "debug";

const transportConsole = new transports.Console({
  level: LOG_LEVEL,
  silent: process.env.NODE_ENV === "test",
});

const myTransports = [transportConsole];

const myFormat = format.combine(
  format.timestamp(),
  format.printf(
    ({ timestamp, level, message }) =>
      `[${timestamp}][${level.toUpperCase()}]: ${message}`
  )
);
const logger = createLogger({
  format: myFormat,
  transports: myTransports,
});

module.exports = logger;
