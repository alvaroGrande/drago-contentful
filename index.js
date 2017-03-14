var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(methodOverride());


var promise = require('bluebird');


var cont = require('./contentfull')
app.get('/api/contentful',cont.getContent)

var options = {
    // Initialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = process.env.DATABASE_URL;
var db = pgp(connectionString);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index')
});

app.get('/indexx', function(request, response, next) {
  response.render('pages/indexx')
});

app.get('/contentful', function(request,response,next){
  response.render('pages/contentful')
});

app.get('/db', function(request,response){
  response.render('pages/db')
});

app.get('/api/indexx', function(request, response,next) {
  db.any('select * from test_table')
        .then(function (data) { 
          console.log(data)
           response.status(200)
                .json( {
                    status:'success', 
                    data:data, 
                    message:'Retrieved Saved Products for user'
                }); 
        })
        .catch(function (err) {
            return next(err); 
        });
});

app.post('/api/indexx', function(request, response,next) {
  var name = request.body.d.name
  var age = request.body.d.age
  //console.log('name ',request.body.name)
  //console.log('Objeto' ,req.body)
  //var names = req.body.nombre
  console.log('name ', name)
  console.log('age ', age)
  db.none('insert into test_table values($1,$2)',[age,name])
        .then(function () { 
           response.status(200)
                .json( {
                    status:'success', 
                    message:'Insertado con exito'
                }); 
        })
        .catch(function (err) {
            return next(err); 
        });
});

app.get('/cool', function(request, response) {
  response.send(cool());
});
app.get('/text', function (request, response, next){
  db.any('select * from usuarios')
        .then(function (data) { 
          console.log(data)
           /*response.status(200)
                .json( {
                    status:'success', 
                    data:data, 
                    message:'Retrieved Saved Products for user'
                }); */
        })
        .catch(function (err) {
            return next(err); 
        });

});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


