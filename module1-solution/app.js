(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];


function LunchCheckController($scope) {
  $scope.dishes = ""
  
  $scope.calculateDishes = function(){
    if ($scope.dishes != ""){
      var idx, dish;
      var dishList = [];
      var temp = $scope.dishes.split(',');
      
      for (idx in temp) {
        dish = temp[idx].trim()
        if (dish != "")
          dishList.push(dish);
      }
      
      if (dishList.length == 0) {
        $scope.msg = "Please enter data first";
        $scope.style = {"color":"red", "border-color": "red"}
      }    
      else if (dishList.length <= 3) {
        $scope.msg = "Enjoy!";
        $scope.style = {"color":"green", "border-color": "green"}
      }
      else if (dishList.length > 3) {
        $scope.msg = "Too much!";
        $scope.style = {"color":"green", "border-color": "green"}
      }
    }
    
    else {
      $scope.msg = "Please enter data first";
      $scope.style = {"color":"red", "border-color": "red"}
    }
  };
};
})();
