angular.module('app', ['ui.router', 'angular.filter', 'app.controllers'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/reports");

        $stateProvider
            .state('reports', {
                url: "/reports",
                templateUrl: "templates/reports.html",
                controller: 'ReportsCtrl'
            });
    }]);