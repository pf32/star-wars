
const planetas = require('../controllers/planetas') 

module.exports = app =>{
    app.get('/planetas', (req, res) =>{
    res.send('<html><body><a href="http://www.alura.com.br">Site da Alura</a></body></html>');
  });

   app.get('/planetas/:id', (req, res) =>{
    res.send('<html><body><a href="http://www.alura.com.br">Site da Alura</a></body></html>');
  });

  
 app.get('/planetas/:nome', (req, res) =>{
    res.send('<html><body><a href="http://www.alura.com.br">Site da Alura</a></body></html>');
  });

  app.post('/planetas', planetas.create) 


 app.put('/planetas', (req, res)=>{
    console.log(req.body);
    
    res.send('teste post');
})



 app.delete('/planetas', (req, res)=>{
    console.log(req.body);
    
    res.send('teste post');
})
}