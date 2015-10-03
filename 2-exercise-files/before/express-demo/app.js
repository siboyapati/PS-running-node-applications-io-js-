var app = module.exports = require('express')();

app.get('/user', function(req, res){
  res.send(200, { name: 'tobi' });
});


app.listen(3000);
console.log("Application is listening on http://localhost:3000/user")