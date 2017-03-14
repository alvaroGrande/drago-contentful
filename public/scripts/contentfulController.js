(function () {

    "use strict"
    angular.module('app', []).controller('contentfulController', contentfulController)

    contentfulController.$inject = ['$scope', '$http']

    function contentfulController($scope, $http) {
        var _this = this
        this.content = null

        this.getContent = function(){
            $http.get('/api/contentful')
            .then(function(dataFromServer){
                _this.content=dataFromServer.data.data.items[0].fields
                console.log(_this.content)
            })
        }

        this.getContent()

        
        
    }
})()    