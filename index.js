var app = angular.module("myApp" , []);

app.controller("myctr" , function($scope , $http){
    $http.get("data.json").then(function(item){
        $scope.emp = item.data;

        $scope.addrow=function(){
          $scope.emp.push()
        }
        
        $scope.adduser=function(){
            $scope.emp.push({'name':$scope.name,'id':$scope.id,'designation':$scope.designation,'DOJ':$scope.DOJ,'gender':$scope.gender,'salary':$scope.salary,'email':$scope.email})
            $scope.name='';
            $scope.id='';
            $scope.designation='';
            $scope.DOJ='';
            $scope.gender='';
            $scope.salary='';
            $scope.email='';
            


        };
        
            $scope.delete = function (emp) {
                var re=$scope.emp.indexOf(emp);
                $scope.emp.splice(re,1);
            }
            
    


})
});