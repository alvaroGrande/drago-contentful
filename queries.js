var db = require('./db')

// add query functions

module.exports =  {
    getFeature: getFeature,
    getProductos: getProductos,
    getMasInfo: getMasInfo,
    getPoseedores:getPoseedores,
    getDetalles:getDetalles
};

//FUNCION UTILIZADA PARA MOSTRAR EL ID_USUARIO Y EL NOMBRE (EXTRAIDOS DE LA BASE DE DATOS)
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

//FUNCION UTILIZADA PARA MOSTRAR EL ID_PRODUCTO Y EL ARTICULO (EXTRAIDOS DE LA BASE DE DATOS)
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

//FUNCION UTILIZADA PARA MOSTRAR LOS PRODUCTOS (ID DE ARTICULO Y NOMBRE DEL ARTICULO)
//QUE POSEE UN DETERMINADO USUARIO (EXTRAIDOS DE LA BASE DE DATOS)
function getMasInfo(request, response, next) {
       var ID_usuario = request.body.d.name
    db.any('select *, p.articulo from productos p inner join "usuarios/productos" '+ 
    ' up on p."ID_product" = up.articulo inner join usuarios u on u."ID_usuario" = up."ID_usuario" where u."ID_usuario" = $1', ID_usuario)
        .then(function (data) {
            
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

//FUNCION UTILIZADA PARA MOSTRAR LOS USUARIOS (ID DEL USUARIO Y NOMBRE DEL USUARIO)
//QUE POSEEN UN DETERMINADO ARTICULO (EXTRAIDOS DE LA BASE DE DATOS)

function getPoseedores(request, response, next) {
       var ID_product = request.body.d.name

        
    db.any('select * from usuarios u inner join "usuarios/productos"up on u."ID_usuario" = up."ID_usuario" inner join productos p on p."ID_product" = up."articulo" where p."ID_product" = $1', ID_product)


        .then(function (data) {
            
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

//FUNCION UTILIZADA PARA MOSTRAR EL PRIMER, SEGUNDO APELLIDO Y EL EMAIL DE UN USUARIO
//A TRAVÉS DEL BOTÓN "DETALLES", MEDIANTE UNA VENTANA MODAL EN BOOTSTRAP

function getDetalles(request, response, next) {
    var ID_usuario = request.body.d.name

    db.any('select * from usuarios where "ID_usuario" = $1',ID_usuario)
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


