var contentful = require('contentful')

var space = process.env.CONTENTFUL_SPACE
var token = process.env.CONTENTFUL_ACCESS_TOKEN

var client = contentful.createClient({
    space: space,
    accessToken: token
})


module.exports = {
    getContent:getContent
}

function getContent(request,response){
    client.getEntries({ content_type: 'prueba'})
        .then(entries => response.status(200)
            .json({
                status: 'success',
                data: entries,
                message: 'Retrieved Saved news for user'
            }))
}




