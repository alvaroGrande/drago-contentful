var db = require('./db')

// add query functions

module.exports =  {
    getFeature: getFeature,
    getProductos: getProductos,
    getMasInfo: getMasInfo
};

function getFeature(request, response, next) {
    db.any('select * from usuarios')
        .then(function (data) {
            console.log(data)
            response.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved Saved Products for user'
                });
        })
        .catch(function (err) {
            return next(err);
        });


}
function getProductos(request, response, next) {
    db.any('select * from productos')
        .then(function (data) {
            console.log(data)
            response.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved Saved Products for user'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function getMasInfo(request, response, next) {
       var ID_usuario = request.body.d.name
    db.any('select * from productos p inner join "usuarios/productos" '+ 
    ' up on p."ID_product" = up.articulo inner join usuarios u on u."ID_usuario" = up."ID_usuario" where u."ID_usuario" = $1', ID_usuario)
        .then(function (data) {
            console.log(data)
            response.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved Saved Products for user'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}


