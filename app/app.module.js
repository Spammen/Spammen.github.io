angular.module('designApp', [
  'ngMaterial',
  'ngRoute',
  'ngResource',
  'md.data.table'
]).config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('deep-green')
    .accentPalette('teal');
});
