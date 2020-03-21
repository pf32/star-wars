const express = require('express');
const app = express();
app.listen(8080, function(){
    console.log('Server run on port 8080')
})

app.get('/planetas', (req, res) =>{
    res.send('<html><body><a href="http://www.alura.com.br">Site da Alura</a></body></html>');
});


app.post('/planetas', (req, res)=>{
    console.log(req.body);
    
    res.send('teste post');
});