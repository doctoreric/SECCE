/*   
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.5
Version: 1.9.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v1.9/admin/
*/

var colorAdminApp = angular.module('colorAdminApp', [
    'ui.router',
    'ui.bootstrap',
    'oc.lazyLoad'
]);

colorAdminApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
   //$urlRouterProvider.otherwise('/app/dashboard/v2');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        
        .state('user', {
            url: '/:userId',
            templateUrl: 'template/app.html',
            abstract: true
        })
        .state('user.dashboard', {
            url: '/dashboard',
            templateUrl: 'views/index.html',
            data: { pageTitle: 'Dashboard' },
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'assets/plugins/jquery-jvectormap/jquery-jvectormap-1.2.2.css',
                            'assets/plugins/bootstrap-calendar/css/bootstrap_calendar.css',
                            'assets/plugins/gritter/css/jquery.gritter.css',
                            'assets/plugins/morris/morris.css',
                            'assets/plugins/morris/raphael.min.js',
                            'assets/plugins/morris/morris.js',
                            'assets/plugins/jquery-jvectormap/jquery-jvectormap-1.2.2.min.js',
                            'assets/plugins/jquery-jvectormap/jquery-jvectormap-world-merc-en.js',
                            'assets/plugins/bootstrap-calendar/js/bootstrap_calendar.min.js',
                            'assets/plugins/gritter/js/jquery.gritter.js'
                        ]
                    });
                }]
            }
        })
        .state('login', {
            url: '/login',
            data: { pageTitle: 'Login' },
            templateUrl: 'views/login.html'
        })
}]);

colorAdminApp.run(['$rootScope', '$state', 'setting', function($rootScope, $state, setting) {
    $rootScope.$state = $state;
    $rootScope.setting = setting;
}]);