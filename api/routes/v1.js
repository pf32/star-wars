const { Router } = require("express");
const { name, version } = require("../../package.json");
const Joi = require("joi");
const planetas = require('../controllers/planetas');
const logger = require("../utils/logger");



const asyncMiddleware = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => {
      if (err.response && err.response.status && err.response.config) {
        const loggerMsg = "Error received from request uri (424): "
          .concat(err.response.config.url)
          .concat("\nERROR MESSAGE: ")
          .concat(err.message);
        logger.error(loggerMsg);
        awsSns.prepareSNSAlert(loggerMsg);
        return res.sendStatus(424);
      }
      logger.error(err.stack);
      return res.sendStatus(500);
    });
  };  


module.exports = app =>{ 
  app.route('/planetas').get(asyncMiddleware(planetas.create));

  

}

