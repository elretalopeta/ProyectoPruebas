var mycontrolador = angular.module('starter.controllers', [])



//Ctrl Curso
mycontrolador.controller('CursosCtrl', function($scope, Cursos){
    Cursos.getCursos().then(function(data){
        $scope.info = data.data;
    },function(mensajeError){
        alert('error: ' + mensajeError.error_code);
    });     
});

//Ctrol Cursos (Detalle)
mycontrolador.controller('CursoDetalleCtrl', function($scope, $http, $stateParams){     
  var id = {id:$stateParams.cursoId};
  $http.post('cursodetalle', id).then(
    function(data){
        $scope.info=data.data;
    }), function(error){
    alert('error '+ error.error_code);
  }

   $http.post('checkcurso', id).then(
     function(data){
        
        //var resultado = data.data;
        //no me hace el if
        
        if(data.data=="true"){
          $scope.fav="Añadir a favoritos";
          debugger;
        }else{
           $scope.fav="Añadido";
           debugger; 
    }});

  $scope.myFav=function(){ 
     $http.post('checkcurso', id).then(
    function(data){
      if(data=true){
  $http.post('setcursofav', id).then(
    function(data){
        $scope.fav="Añadido";
    }), function(error){
    alert('error '+ error.error_code);
  }
      }else{
         $scope.fav="Añadido";
         debugger;
      }
    });
     
  }

});

/*
mycontrolador.controller('CursoDetalleCtrl', function($scope, $stateParams, Cursos2){     
      Cursos2.getCursoDetalle().then(function(data){
        $scope.info = data.data;
    },function(mensajeError){
        alert('error: ' + mensajeError.error_code);
    });   
});
*/

//Ctrl Experto
mycontrolador.controller('ExpertoCtrl', function($scope, Expertos){
    Expertos.getExpertos().then(function(data){
        $scope.info = data.data;
    },function(mensajeError){
        alert('error: ' + mensajeError.error_code);
    });     
});

mycontrolador.controller('ExpertoPerfilCtrl', function($scope, $stateParams, $http){
    var data = {id:$stateParams.expertoId};

  $http.post('expertosperfil', data).then(
    function(data){
        $scope.infoup=data.data;
    }), function(error){
    alert('error '+ error.error_code);
  }

 $http.post('expertoscursos', data).then(
    function(data){
        $scope.info=data.data;
    }), function(error){
    alert('error '+ error.error_code);
  }
  });

/*
      Expertos2.getExpertosPerfil().then(function(data){
        $scope.infoup = data.data;
    },function(mensajeError){
        alert('error: ' + mensajeError.error_code);
    }); 

      Expertos2.getExpertosCursos().then(function(data){
        $scope.info = data.data;
    },function(mensajeError){
        alert('error: ' + mensajeError.error_code);
    }); 
*/

mycontrolador.controller('ExpertoCursoDetalleCtrl', function($scope, $stateParams, $http){ 
   var data = {id:$stateParams.expertocursoId};
  $http.post('cursodetalle', data).then(
    function(data){
        $scope.info=data.data;
    }), function(error){
    alert('error '+ error.error_code);
  }   
})

/*
mycontrolador.controller('ExpertoCursoDetalleCtrl', function($scope, $stateParams, Expertos3){ 
      Expertos3.getExpertosDetalleCursos().then(function(data){
        $scope.info = data.data;
    },function(mensajeError){
        alert('error: ' + mensajeError.error_code);
    });   
});
*/

//Ctrol Blog
mycontrolador.controller('BlogCtrl', function($scope, Blog){
   Blog.getBlog().then(function(data){
        $scope.info = data.data;
    },function(mensajeError){
        alert('error: ' + mensajeError.error_code);
    });     
});

//Ctrol Blog (Post)

mycontrolador.controller('BlogPostCtrl', function($scope, $stateParams, $http){  
   var data = {id:$stateParams.blogId};
  $http.post('blogpost', data).then(
    function(data){
        $scope.info=data.data;
    }), function(error){
    alert('error '+ error.error_code);
  } 
});


mycontrolador.controller('BlogPostContCtrl', function($scope, $stateParams, $http){
   var data = {id:$stateParams.postId};
  $http.post('blogpostcont', data).then(
    function(data){
        $scope.info=data.data;
    }), function(error){
    alert('error '+ error.error_code);
  } 
});

//Ctrol Perfil
mycontrolador.controller('PerfilCtrl', function($scope, Perfil){
   Perfil.getPerfil().then(function(data){
        $scope.info = data.data;
    },function(mensajeError){
        alert('error: ' + mensajeError.error_code);
    }); 

      Perfil.getPerfil2().then(function(data){
        $scope.infodown = data.data;
    },function(mensajeError){
        alert('error: ' + mensajeError.error_code);
    }); 

});

//Ctrol Correo
mycontrolador.controller('CorreoCtrl', function($scope, Correo){
    Correo.getCorreo().then(function(data){
        $scope.info = data.data;
    },function(mensajeError){
        alert('error: ' + mensajeError.error_code);
    });     
});

mycontrolador.controller('CorreoContCtrol', function($scope, $stateParams,$http){  
 var data = {id:$stateParams.chatId};
  $http.post('chat', data).then(
    function(data){
        $scope.info=data.data;
    }), function(error){
    alert('error '+ error.error_code);
  } 
});