(function () {

    "use strict";


    app.controller('dbController', dbController)

    dbController.$inject = ['$scope', '$http'];

    function dbController($scope, $http) {
        var _this = this
        this.loggedContenttt = null
        this.loggedContentttt = null

        this.getFeatures = function () {
            var url = "/api/db"
            $http.get(url)
                .then(function (dataFromServer, status, headers, config) {
                    _this.loggedContent = dataFromServer.data.data
                    console.log(_this.loggedContent)
                })
        }


        this.getFeatures()

           this.getProductos = function () {
            var url = "/api/products"
            $http.get(url)
                .then(function (dataFromServer, status, headers, config) {
                    _this.loggedContentt = dataFromServer.data.data
                    console.log(_this.loggedContentt)
                })
        }
        
        this.getProductos()

     
     
   this.verDetalle = function(datos){
                console.log(datos)
                
                $http.post("/api/info", {
                    headers: {
                                'Content-Type': 'application/json'
                            },
                    d: {
                        name: datos,
                      
                        }
                }).then(function(dataFromServer){
                    console.log(dataFromServer)
                    $scope.fdatos={}
                    _this.loggedContenttt = dataFromServer.data.data
                    //_this.getContent()
                })

    }

     this.verPoseedores = function(datos){
                console.log(datos)
                
                $http.post("/api/poseedores", {
                    headers: {
                                'Content-Type': 'application/json'
                            },
                    d: {
                        name: datos,
                      
                        }
                }).then(function(dataFromServer){
                    console.log(dataFromServer)
                    $scope.fdatos={}
                    _this.loggedContentttt = dataFromServer.data.data
                    //_this.getContent()
                })

    }
    } 
})()

