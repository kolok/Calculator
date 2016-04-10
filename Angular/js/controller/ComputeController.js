app.controller('ComputeController', function($scope){
  $scope.result = false;
  $scope.newCompute = {};
  $scope.newExpression = {};
  $scope.lastResult = "Please fill the fields";
  $scope.computes = [];
  $scope.expressions = [];
  $scope.computeExpression = function(){
    $scope.newExpression.result = eval($scope.newExpression.expression);
    $scope.expressionResult = "Last result is : " + $scope.newExpression.result;
    $scope.expressions.push($scope.newExpression.expression + " = " + $scope.newExpression.result);
    return;
  }
  $scope.computeProcess = function(){
    if ($scope.newCompute.operation == undefined) {
      $scope.lastResult = "fill the operation select please";
      return;
    }
    if ($scope.newCompute.numbera == undefined || $scope.newCompute.numberb == undefined) {
      $scope.lastResult = "fill the numbers";
      return;
    }
    switch ($scope.newCompute.operation)
    {
      case "sum":
        $scope.newCompute.result = $scope.newCompute.numbera*1 + $scope.newCompute.numberb*1;
        $scope.newCompute.op = "+";
        break;
      case "substract":
        $scope.newCompute.result = $scope.newCompute.numbera*1 - $scope.newCompute.numberb*1;
        $scope.newCompute.op = "-";
        break;
      case "multiply":
        $scope.newCompute.result = $scope.newCompute.numbera*1 * $scope.newCompute.numberb*1;
        $scope.newCompute.op = "*";
        break;
      case "divide":
        if ($scope.newCompute.numberb == "0") {
          $scope.lastResult = "divide by 0 is forbidden";
          return;
        }
        $scope.newCompute.result = $scope.newCompute.numbera / $scope.newCompute.numberb;
        $scope.newCompute.op = "/";
        break;
    }
    $scope.lastResult = "Last result is : " + $scope.newCompute.result;
    $scope.computes.push($scope.newCompute);
    $scope.newCompute = {};
  }
})
