function do_routes($routeProvider) {
    console.log('doing frontend routes stuff');
    $routeProvider
        .when('/', {
            templateUrl: 'partials/patients.html',
            controller: 'all_patients'
        })
        .when('/patient/:_id', {
            templateUrl: 'partials/patient_record.html',
            controller: 'single_patient'
        });
}