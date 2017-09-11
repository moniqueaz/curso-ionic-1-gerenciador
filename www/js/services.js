angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('GerenciadorService', function($http){
    var url = "http://aluracar.herokuapp.com";

    return {
        obterAgendamentos : function(){
            return $http.get(url + "/agendamentos").then(function(response){
                return response.data;
            });
        },
        obterFornecedores : function(){
            return $http.get(url + "/fornecedores").then(function(response){
                return response.data;
            });
        }
    }
});