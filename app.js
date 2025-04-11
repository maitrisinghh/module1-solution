(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.lunchList = "";
    $scope.message = "";
    $scope.messageClass = "";

    $scope.checkLunch = function () {
        if (!$scope.lunchList.trim()) {
            $scope.message = "Please enter data first";
            $scope.messageClass = "empty";
            return;
        }

        var items = $scope.lunchList.split(',');
        var itemCount = 0;
        for (var i = 0; i < items.length; i++) {
            if (items[i].trim() !== "") {
                itemCount++;
            }
        }

        if (itemCount <= 3) {
            $scope.message = "Enjoy!";
            $scope.messageClass = "enjoy";
        } else {
            $scope.message = "Too much!";
            $scope.messageClass = "too-much";
        }
    };
}

})();
