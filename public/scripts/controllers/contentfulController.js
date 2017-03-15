(function () {

    "use strict"
    //Creamos modulo de angular con controlador asociado contentfulController
    app.controller('contentfulController', contentfulController)

    contentfulController.$inject = ['$scope', '$http']
    //Controlador y funciones del controlador
    function contentfulController($scope, $http) {
        var _this = this //Para controlar el ambito de this
        this.content = null //content a null
        //parametro del controlador .getContent para sacar el contenido
        this.getContent = function(){
            $http.get('/api/contentful')
            .then(function(dataFromServer){
                _this.content=dataFromServer.data.data.items
                console.log(_this.content)
            })
        }

        this.getContent()   
    }
})()    