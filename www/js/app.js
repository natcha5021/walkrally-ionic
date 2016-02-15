// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/manubar.html'
  })
  
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html'
  })
  
    .state('Login', {
    url: '/Login',
    templateUrl: 'templates/Login.html'
  })

   .state('teamcreate', {
    url: '/teamcreate',
    templateUrl: 'templates/teamCreate.html'
  })


  

  // Each tab has its own nav history stack:

  .state('tab.map', {
    url: '/map',
    views: {
      'tab-map': {
        templateUrl: 'templates/tab-map.html',
        controller: 'mapCtrl'
      }
    }
  })

  .state('tab.userscore', {
      url: '/userscore',
      views: {
        'tab-userscore': {
          templateUrl: 'templates/tab-userscore.html',
          controller: 'userscoreCtrl'
        }
      }
    })


  .state('tab.rank', {
    url: '/rank',
    views: {
      'tab-rank': {
        templateUrl: 'templates/tab-rank.html',
        controller: 'rankCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/Login');

})


  //var myapp = angular.module('myapp', ['starter.controllers'])
//    myapp.config(function($stateProvider, $urlRouterProvider){
//      
//      // For any unmatched url, send to /route1
//     // $urlRouterProvider.otherwise("/route1") 
//      $stateProvider
//        .state('index', {
//            url: "/index",
//            templateUrl: "index.html"
//        })
//         
//          
//        .state('teamcreate', {
//            url: "/teamcreate",
//            templateUrl: "teamcreate.html"
//        })
//        
//    })