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
                users: 1,
                bookmark: false
            },
            {
                id: 2,
                level: 1,
                exception: 'NullPointerException',
                file: 'MainActivity.java',
                line: 22,
                method: 'com.tbilisi.bus.MainActivity.onResume',
                crashes: 100,
                users: 10,
                bookmark: false
            },
            {
                id: 3,
                level: 2,
                exception: 'ClassCastException',
                file: 'HistoryActivity.java',
                line: 9,
                method: 'com.tbilisi.bus.HistoryActivity.onCreate',
                crashes: 10,
                users: 2,
                bookmark: true
            }
        ];

        $scope.showReport = function (report) {
            $state.go('report', { id: report.id });
        };

        $scope.archiveReport = function (report, $event) {
            if($event) $event.stopPropagation();
            _.remove($scope.reports, { id: report.id });
        };

        $scope.bookmarkReport = function (report, $event) {
            if($event) $event.stopPropagation();
            report.bookmark = !report.bookmark;
        };
    }])
    .controller('ReportCtrl', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {
        $scope.report = {
            id: 3,
            level: 2,
            exception: 'ClassCastException',
            file: 'HistoryActivity.java',
            line: 9,
            method: 'com.tbilisi.bus.HistoryActivity.onCreate',
            crashes: 10,
            users: 2,
            bookmark: true
        };
        $scope.setTitle("Crash #" + $stateParams.id);
    }]);