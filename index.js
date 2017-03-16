var express = require('express');
var app = express();
var auth = require('basic-auth');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//Api URL
//Base de Datos
var db = require('./queries')
// Ejemplo URL API Base de Datos --> app.get('/api/get', db.get)

//Contentful
var cont = require('./contentful')
//Ejemplo URL API CONTENTFUL --> app.get('/api/get', cont.get)
app.get('/api/contentful',cont.getProduct)


app.get('/api/db', db.getFeature)
app.get('/api/products', db.getProductos)
app.post('/api/info', db.getMasInfo)


//Autentificacion a la pagina (user/pwd)

app.get('/*', function (req, res, next) {
  var credentials = auth(req)
  if (process.env.BASICAUTH == "ACTIVE") {
    if (!credentials || credentials.name !== process.env.USER || credentials.pass !== process.env.PASSWORD) {
      res.statusCode = 401
      res.setHeader('WWW-Authenticate', 'Basic realm="example"')
      res.end('Access denied')
    } else {
      next()
    }
  }
  else {
    next()
  }
})

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/:id', function (req, res) {
  res.render('pages/' +  req.params.id);
});

app.get('/favico.ico', function (req, res) {/*code*/ });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


