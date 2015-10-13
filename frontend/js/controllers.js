angular.module('app.controllers', [])
    .controller('MainCtrl', ['$scope', '$state', function ($scope, $state) {
        $scope.setTitle = function (title) {
            $scope.title = title;
        };
    }])
    .controller('ReportsCtrl', ['$scope', '$state', function ($scope, $state) {
        $scope.setTitle("Reports");

        $scope.reports = [
            {
                id: 1,
                level: 1,
                exception: 'NullPointerException',
                file: 'MainActivity.java',
                line: 15,
                method: 'com.tbilisi.bus.MainActivity.onCreate',
                crashes: 20,
                users: 1
            },
            {
                id: 2,
                level: 1,
                exception: 'NullPointerException',
                file: 'MainActivity.java',
                line: 22,
                method: 'com.tbilisi.bus.MainActivity.onResume',
                crashes: 100,
                users: 10
            },
            {
                id: 3,
                level: 2,
                exception: 'ClassCastException',
                file: 'HistoryActivity.java',
                line: 9,
                method: 'com.tbilisi.bus.HistoryActivity.onCreate',
                crashes: 10,
                users: 2
            }
        ];

        $scope.showReport = function (report) {
            $state.go('report', { id: report.id, report: report });
        };
    }])
    .controller('ReportCtrl', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {
        $scope.report = $stateParams.report;
        $scope.setTitle("Crash #" + $stateParams.id);
    }]);