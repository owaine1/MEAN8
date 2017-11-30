function do_all_patients($scope, $http) {
    console.log('getting all patients');
    $http.get('/api/v8/read').then(function (server_object) {
        console.log(server_object);
        $scope.patients = server_object.data;
    });
}