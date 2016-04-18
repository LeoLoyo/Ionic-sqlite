(function(){

  var app = angular.module('starter', ['ionic','ngCordova']);
  var db = null;
  app.run(function($ionicPlatform, $cordovaSQLite) {
    $ionicPlatform.ready(function(){
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
      StatusBar.styleDefault();
      }
      window.plugins.sqlDB.copy("mudartedb.sqlite", 0, copysuccess,copyerror);
      function copysuccess(){
        window.sqlitePlugin.openDatabase({ name: 'mudartedb.sqlite',androidLockWorkaround: 1, location: 'default' }, opensuccess, openerror);
      }
      function copyerror(){
        alert('error al copiar');
      }
      function opensuccess(){
        alert('DB Working...')
      }
      function openerror(){
        alert('!!!Error DB  not Working!!!')
      }
    });//platform ready
});//run

})()


