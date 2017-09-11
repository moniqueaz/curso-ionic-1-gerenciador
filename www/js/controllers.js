angular.module('app.controllers', [])
  
.controller('AgendamentoController', function($scope, GerenciadorService){
    $scope.agendamento = [];

    GerenciadorService.obterAgendamentos().then(function(dados){
        $scope.agendamentos = dados;
    })
})
   
.controller('FornecedoresController', function($scope, GerenciadorService){
    $scope.fornecedores = [];

    GerenciadorService.obterFornecedores().then(function(dados){
        $scope.fornecedores = dados;
    });

})
    