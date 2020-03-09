const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs')

app.get('/', function(req, res){
//  res.send('Hello World')
  res.render('index');
})

app.post('/', function(req, res){
  res.render('index');
  console.log(req.body.filename);
})

app.listen(3000, function(){
  console.log('Testing: app listening on port 3000')
})
