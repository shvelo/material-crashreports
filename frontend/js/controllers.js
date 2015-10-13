angular.module('app.controllers', [])
    .controller('ReportsCtrl', ['$scope', function ($scope) {
        $scope.reports = [
            {
                id: 1,
                level: 1,
                exception: 'NullPointerException',
                location: 'MainActivity.java line 15',
                method: 'com.tbilisi.bus.MainActivity.onCreate',
                crashes: 20,
                users: 1
            },
            {
                id: 2,
                level: 1,
                exception: 'NullPointerException',
                location: 'MainActivity.java line 22',
                method: 'com.tbilisi.bus.MainActivity.onResume',
                crashes: 100,
                users: 10
            },
            {
                id: 3,
                level: 2,
                exception: 'ClassCastException',
                location: 'HistoryActivity.java line 9',
                method: 'com.tbilisi.bus.HistoryActivity.onCreate',
                crashes: 10,
                users: 2
            }
        ];
    }]);