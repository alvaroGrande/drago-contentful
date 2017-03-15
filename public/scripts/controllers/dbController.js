(function () {

    "use strict";


    app.controller('dbController', dbController)

    dbController.$inject = ['$scope', '$http'];

    function dbController($scope, $http) {
        var _this = this

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

    }

})()

