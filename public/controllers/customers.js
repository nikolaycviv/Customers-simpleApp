/* global myApp */

myApp.controller('CustomersController', [ '$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    $scope.getCustomers = function() {
        $http.get('/api/customers').then((response) => {
            $scope.customers = response.data;
        });
    };

    $scope.getCustomer = function() {
        let id = $routeParams.id;
        $http.get(`/api/customers/${ id}`).then((response) => {
            $scope.customer = response.data;
        });
    };

    $scope.addCustomer = function() {
        $http.post('/api/customers/', $scope.customer).then((response) => {
            window.location.href = '#/customers';
        });
    };

    $scope.updateCustomer = function() {
        let id = $routeParams.id;
        $http.put(`/api/customers/${ id}`, $scope.customer).then((response) => {
            window.location.href = '#/customers';
        });
    };

    $scope.removeCustomer = function(id) {
        $http.delete(`/api/customers/${ id}`).then((response) => {
            window.location.href = '#/customers';
        });
    };
} ]);
