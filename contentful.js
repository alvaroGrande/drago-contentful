//REQUIRE
var contentful = require('contentful')
//VARIABLES DE ENTORNO EN VARIABLES LOCALES
var space = process.env.CONTENTFUL_SPACE
var token = process.env.CONTENTFUL_ACCESS_TOKEN
//CREAMOS CLIENTE CON ESAS VARIABLES DE ENTORNO
var client = contentful.createClient({
    space: space,
    accessToken: token
})
//EXPORTAMOS MODULO PARA QUE SEA ACCESIBLE (PUBLICO)
module.exports = {
    getContent:getContent,
    getProduct:getProduct
}
//FUNCION getContent PARA SACAR CONTENIDO DE CONTENTFUL PRUEBA
function getContent(request,response){
    client.getEntries({ content_type: 'prueba'})
        .then(entries => response.status(200)
            .json({
                status: 'success',
                data: entries,
                message: 'Retrieved Saved news for user'
            }))
}

//FUNCION getProduct PARA SACAR CONTENIDO DE CONTENTFUL PRODUCTO
function getProduct(request,response){
    client.getEntries({ content_type: 'product'})
        .then(entries => response.status(200)
            .json({
                status: 'success',
                data: entries,
                message: 'Retrieved Saved news for user'
            }))
}

//FUNCION PARA BUSCAR UN ELEMENTO DENTRO DE CONTENTFULL
