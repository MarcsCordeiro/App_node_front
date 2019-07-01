(function () {
    angular.module('primeiroApp').controller('DashboardCtrl', [
        '$http',
        DashboardController
    ])

    function DashboardController($http) {
        const vm = this
        vm.getSummary = function () {
            const url = 'http://localhost:3005/api/billingSummary'
            $http.get(url).then(function (response) {
                const data = response.data
                vm.credit = data.credit
                vm.debt = data.debt
                vm.total = data.credit - data.debt
            })

        }
        vm.getSummary()
    }

})()