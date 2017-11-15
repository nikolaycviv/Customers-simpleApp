/* global myApp */

myApp.controller('CustomersController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    $scope.getCustomers = function() {
        $http.get('/api/customers').then(function(response) {
            $scope.customers = response.data;
        });
    }

    $scope.getCustomer = function() {
        var id = $routeParams.id;
        $http.get('/api/customers/' + id).then(function(response) {
            $scope.customer = response.data;
        });
    }

    $scope.addCustomer = function() {
        $http.post('/api/customers/', $scope.customer).then(function(response) {
            window.location.href = '#/customers';
        });
    }

    $scope.updateCustomer = function() {
        var id = $routeParams.id;
        $http.put('/api/customers/' + id, $scope.customer).then(function(response) {
            window.location.href = '#/customers';
        });
    }

    $scope.removeCustomer = function(id) {
        $http.delete('/api/customers/' + id).then(function(response) {
            window.location.href = '#/customers';
        });
    }
}]);
