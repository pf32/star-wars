
const axios = require("axios");
const queryString = require("query-string");

const starwarsapi = () => {
  const req = axios.create({
    baseURL: process.env.STARWARS_API_URI,
  });
  return req;
};


exports.getPlanets = async (params) => {    
   // const paramsStr = queryString.stringify(params, { arrayFormat: "bracket" });
   const response = await axios.get(`https://swapi.dev/api/planets/1`);   
   return response
    //return starwarsapi().get(`/planets/1`);
  };
  