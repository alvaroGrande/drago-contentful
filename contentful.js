var contentful = require('contentful')

var space = process.env.CONTENTFUL_SPACE
var token = process.env.CONTENTFUL_ACCESS_TOKEN

var client = contentful.createClient({
    space: space,
    accessToken: token
})

//Add contentful functions
module.exports =  {
    get: get
};

function get(request, response){

}