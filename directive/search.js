(function(){var a=angular.module("douban.SearchModule",["douban.listModule"]);
            a.directive("search",["$routeParams","$location","$route","$timeout","$rootScope",
                                  function(d,f,e,c,b){
              return{template:'<div id="navbar" class="navbar-collapse collapse"><form ng-submit="search()" class="navbar-form navbar-right" style="display:inline-block;"><input ng-model="input" type="text" class="form-control" placeholder="Search..."></form></div>',replace:true,link:function(h,j,i,g){h.search=function(){if(d.category){e.updateParams({category:"search",q:b.input})}else{f.path("search");c(function(){e.updateParams({category:"search",q:b.input})},0)}}}}}])})();
