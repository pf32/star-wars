const express = require('express');
const consign = require('consign')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json)

module.exports =()=>{
consign()
.include('infra')
.into(app)

return app
}
