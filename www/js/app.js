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

  //menu (curso-experto-workspace-blog-perfil)
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
 
//Curso (curso-curso detalle)
  .state('tab.curso', {
      url: "/curso",
      views: {
        'curso-tab': {
          templateUrl: "templates/curso.html",
         controller: 'CursosCtrl'
        }
      }
    })
  
    .state('tab.curso-detalle', {
      url: '/curso/:cursoId',
      views: {
        'curso-tab': {
          templateUrl: 'templates/curso-detalle.html',
          controller: 'CursoDetalleCtrl'         
        }
      }
    })

    //Experto
    .state('tab.experto', {
      url: '/experto',
      views: {
        'experto-tab': {
          templateUrl: 'templates/experto.html',
          controller: 'ExpertoCtrl'
        }
      }
    }) 
 .state('tab.experto-detalle', {
      url: "/experto/:expertoId",
      views: {
        'experto-tab': {
          templateUrl: 'templates/experto-detalle.html',
          controller:'ExpertoPerfilCtrl'
        }
      }
    })
      .state('tab.experto-curso', {
      url: "/experto-curso/:expertocursoId",
      views: {
        'experto-tab': {
          templateUrl: 'templates/experto-curso.html',
          controller:'ExpertoCursoDetalleCtrl'

        }
      }
    })
    //Workspace
    .state('tab.workspace', {
      url: "/workspace",
      views: {
        'workspace-tab': {
          templateUrl: "templates/workspace.html",
        // controller: 'TodoCtrl'
        }
      }
    })

    //Blog
    .state('tab.blog', {
      url: "/blog",
      views: {
        'blog-tab': {
          templateUrl: "templates/blog.html",
          controller: 'BlogCtrl'
        }
      }
    })
    
    .state('tab.blog-post', {
      url: "/blog-post/:blogId",
      views: {
        'blog-tab': {
          templateUrl: "templates/blog-post.html",
          controller: 'BlogPostCtrl'
        }
      }
    })
    .state('tab.post-detalle', {
      url: "/post-detalle/:postId",
      views: {
        'blog-tab': {
          templateUrl: "templates/post-detalle.html",
          controller: 'BlogPostContCtrl'
        }
      }
    })

   //Perfil
    .state('tab.perfil', {
      url: "/perfil",
      views: {
        'perfil-tab': {
          templateUrl: "templates/perfil.html",
          controller: "PerfilCtrl"
        }
      }
    })

    //Correo
  .state('tab.mensajeria', {
      url: "/mensajeria",
      views: {
        'mensajeria-tab': {
          templateUrl: "templates/mensajeria.html",
         controller: 'CorreoCtrl'
        }
      }
    })
  
  .state('tab.chat', {
      url: "/mensajeria/:chatId",
      views: {
        'mensajeria-tab': {
          templateUrl: "templates/chat.html",
         controller: 'CorreoContCtrol'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/curso');

});
