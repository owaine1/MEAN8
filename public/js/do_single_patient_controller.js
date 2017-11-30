function do_single_patient($scope, $http, $routeParams) {
    console.log('getting single patient');

    $scope.read = function () {
        console.log('getting single patient');
        $http.get('/api/v8/read/' + $routeParams._id)
            .then(function (server_object) {
                console.log(server_object);
                $scope.patient = server_object.data;
            });
    }
    $scope.read();

    $scope.update = function (patient) {
        console.log(patient);
        $http.put('/api/v8/update', patient).then(
            function (server_object) {
                console.log(server_object);
                $scope.message = server_object.data.message;
            }
        )
    }
    $scope.delete = function (patient) {
        console.log('deleting patient');
        $http.delete('/api/v8/delete/' + patient._id)
            .then(function (server_object) {
                console.log(server_object);
                $scope.message = server_object.data.message;
            })
    }
}