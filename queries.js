var db = require('./db')

// add query functions

module.exports =  {
    getFeature: getFeature,
    getProductos: getProductos
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