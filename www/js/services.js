var myservices = angular.module('starter.services', [])


//Services Curso
myservices.service('Cursos', function($http){
  this.getCursos = function(){ 
  return $http({method:'GET', url:'--'});
   };
})


//Services Expertos
myservices.service('Expertos', function($http){
  this.getExpertos = function(){ 
  return $http({method:'GET',url:'controllers/expertos'});
   };
});

/*
myservices.service('Expertos2', function($http, $stateParams){
  this.getExpertosPerfil =  function(){ 
     var data = {id:$stateParams.expertoId};
  return $http({method:'POST', url:'expertosperfil', data});
   };

  this.getExpertosCursos =  function(){ 
     var data = {id:$stateParams.expertoId};
  return $http({method:'POST', url:'expertoscursos', data});
   };
});

myservices.service('Expertos3', function($http, $stateParams){
  this.getExpertosDetalleCursos =  function(){ 
    var data = {id:$stateParams.expertocursoId};
  return $http({method:'POST', url:'cursodetalle', data});
   };
});
*/

//Services Blog
myservices.service('Blog', function($http){
  this.getBlog = function(){ 
  return $http({method:'GET', url:'blog'});
   };
});

//Services Perfil
myservices.service('Perfil', function($http){
  this.getPerfil = function(){ 
  return $http({method:'GET',url:'perfil'});
   };

   this.getPerfil2 = function(){ 
  return $http({method:'GET',url:'getcursofav'});
   };
});

//Services Correo
myservices.service('Correo', function($http){
  this.getCorreo = function(){ 
  return $http({method:'GET', url:'correo'});
   };
});