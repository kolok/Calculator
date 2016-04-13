app.controller('EncodeController', function($scope){
  $scope.result = false;
  $scope.url = {};
  $scope.resultEncode = "";
  $scope.resultDecode = "";
  $scope.encodeUrl = function(){
    $scope.resultEncode = encodeURI($scope.url.text)
    return;
  }
  $scope.decodeUrl = function(){
    $scope.resultDecode = decodeURI($scope.url.text)
    return;
  }
})
