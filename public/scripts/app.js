/*(function () {
    'use strict';

    angular.module('app', []).controller('Controlador1', function ($scope, $log, $http) {

        angular
        .module('app', [])
        .controller('appCtrl', ['$http', controladorPrincipal]);

    function controladorPrincipal($http){
        var _this = this
        $scope.listaProyectos = [
                    { nombre: "A", lenguaje: "Visual C#", tipo: "Web", horas: 1000 },
                    { nombre: "B", lenguaje: "Visual Basic", tipo: "Mobile", horas: 250 },
                    { nombre: "C", lenguaje: "TypeScript", tipo: "Web", horas: 2000 }];
        //inicializo un objeto en los datos de formulario
        vm.fdatos = {};
  
            this.loggedContent = null
            
            // declaro la función enviar

            $scope.enviar = function(datos){
                console.log(datos)
            $http.post("recibe-formulario.php", fdatos)
                .success(function(res){
                console.log(res);
                //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;
                });  
            }    
        
        

            
            
            $scope.verDetalle = function (proyecto) {

                $scope.proyectoDetalle = proyecto;
                $log.log(proyecto);

            }
         

                this.getContent = function () {
                    var url = "/api/indexx"
                    $http.get(url)
                        .then(function (dataFromServer, status, headers, config) {
                            _this.loggedContent = dataFromServer.data.data
                            console.log(_this.loggedContent)
                        })
                    
                }
                this.getContent()
    }

    })
})();*/


(function () {

    "use strict"
    angular.module('app', [])
    .controller('Controlador1', Controlador1)

    Controlador1.$inject = ['$scope', '$http']

    function Controlador1($scope, $http) {

        var _this = this
        $scope.listaProyectos = [
                    { nombre: "A", lenguaje: "Visual C#", tipo: "Web", horas: 1000 },
                    { nombre: "B", lenguaje: "Visual Basic", tipo: "Mobile", horas: 250 },
                    { nombre: "C", lenguaje: "TypeScript", tipo: "Web", horas: 2000 }];
        //inicializo un objeto en los datos de formulario
        this.fdatos = {};
  
            this.loggedContent = null
            
            // declaro la función enviar

            this.enviar = function(datos){
                console.log(datos.nombre)
                console.log(datos.edad)
                $http.post("/api/indexx", {
                    headers: {
                                'Content-Type': 'application/json'
                            },
                    d: {
                        name: datos.nombre,
                        age: datos.edad
                        }
                }).then(function(dataFromServer){
                    console.log(dataFromServer)
                    $scope.fdatos={}

                    _this.getContent()
                })




                /*$http.post("/api/indexx", fdatos).success(function(res){
                var name = res.body.name
                var age = res.body.age
                    console.log(res.body.name)
                    console.log(res.body.age)
                    db.none('insert into test(ID, NAME)' + 'values(${name}, ${age}',req.body)
                    .then(function () {
                        res.status(200)
                        .json({
                        status: 'success',
                        message: 'insertado correctamente'
                    });
                    })
                        .catch(function (err) {
                        return next(err);
                    });
                //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;

                });  */
            };
            this.getContent = function () {
                    var url = "/api/indexx"
                    $http.get(url)
                        .then(function (dataFromServer, status, headers, config) {
                            _this.loggedContent = dataFromServer.data.data
                            console.log(_this.loggedContent)
                        })
                    
                }
                this.getContent()

}
})()    