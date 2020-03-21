
const customExpress = require('./config/custom-express')
const app = customExpress()

app.listen(8080, () =>{
    console.log('Server run on port 8080')
})

