exports.create = async (req, res) => {
    const data = req.bady
   
 console.log('Entrei');
 console.log(req.bady);
 
return res.send(data);};
