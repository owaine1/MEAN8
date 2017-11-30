console.log('loaded frontend_app');

var frontend_app = angular.module('patient_app', ['ngRoute']);

frontend_app.config(do_routes);
frontend_app.controller('all_patients', do_all_patients);
frontend_app.controller('single_patient', do_single_patient);