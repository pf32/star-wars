const moment = require("moment");
const logger = require("../utils/logger");
const starwarsapi = require("../gateway/star-wars-api");
const axios = require("axios");



exports.create = async (req, res) => {
    try {
        const response = await axios.get(`https://swapi.dev/api/planets/1`);   

     const { data } = response;   
      console.log(data);
     
      return res.send(data); 

    } catch (error) {
        res.status(500).send({message: 'Falha ao carregar planetas.'});
    }
   

};

