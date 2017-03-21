(function () {

    "use strict";


    app.controller('dbController', dbController)

    dbController.$inject = ['$scope', '$http'];

    //CREAMOS EL CONTROLADOR

    function dbController($scope, $http) {
        var _this = this
        this.loggedContenttt = null
        this.loggedContentttt = null
        this.loggedContenttttt = null
        
    //MÉTODO GET PARA MOSTRAR EL ID_USUARIO Y EL NOMBRE

        this.getFeatures = function () {
            var url = "/api/db"
            $http.get(url)
                .then(function (dataFromServer, status, headers, config) {
                    _this.loggedContent = dataFromServer.data.data
                    console.log(_this.loggedContent)
                })
        }

        this.getFeatures()

      //MÉTODO GET PARA MOSTRAR EL ID_PRODUCTO Y EL NOMBRE DE ARTICULO
           this.getProductos = function () {
            var url = "/api/products"
            $http.get(url)
                .then(function (dataFromServer, status, headers, config) {
                    _this.loggedContentt = dataFromServer.data.data
                    console.log(_this.loggedContentt)
                })
        }
        
        this.getProductos()

     
     // MÉTODO POST PARA MOSTRAR LOS PRODUCTOS QUE POSEE UN DETERMINADO USUARIO
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

    this.verUsuario=function($event){
       var btn= angular.element($event.currentTarget.parentElement)
       console.log(btn)
       btn.find('.user')
       console.log( btn.find('.user').text())
    }


    //MÉTODO POST PARA MOSTRAR LOS USUARIOS QUE POSEEN UN DETERMINADO PRODUCTO
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

     //MÉTODO POST PARA MOSTRAR PRIMER,SEGUNDO APELLIDO Y CORREO POR EL MODAL
     this.verDetalles = function(datos){
                console.log(datos)
                
                $http.post("/api/detalles", {
                    headers: {
                                'Content-Type': 'application/json'
                            },
                    d: {
                        name: datos,
                      
                        }
                }).then(function(dataFromServer){
                    console.log("datosParaModal",dataFromServer.data.data)
                    $scope.fdatos={}
                    _this.loggedContenttttt = dataFromServer.data.data
                    //_this.getContent()
                })

    }
    } 
})()

