var app = angular.module("drago-app", ['contentful', 'ngAnimate', 'ngSanitize', 
'hc.marked', 'ui.bootstrap','ngSanitize','angular.filter','ngFileSaver']);

app.config(['markedProvider', function (markedProvider) {
  markedProvider.setOptions({gfm: true});
}]);