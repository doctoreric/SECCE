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
        .state('user.usro', {
            url: '/usro',
            template: '<div ui-view></div>',
            abstract: true
        })

        .state('user.usro.nuevo', {
            url: '/nuevo',
            data: { pageTitle: 'Usuario Nuevo' },
            templateUrl: 'views/usroNuevo.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/parsley/dist/parsley.js',
                            'assets/plugins/bootstrap-wizard/js/bwizard.js',
                        ]
                    });
                }]
            }
        })
        .state('user.usro.editar', {
            url: '/editar',
            data: { pageTitle: 'Usuario  Editar' },
            templateUrl: 'views/usroEditar.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/parsley/dist/parsley.js',
                            'assets/plugins/bootstrap-wizard/js/bwizard.js',
                        ]
                    });
                }]
            }
        })
        .state('user.usro.consultar', {
            url: '/consultar',
            data: { pageTitle: 'Usuario Consultar' },
            templateUrl: 'views/usroConsultar.html'
        })
        .state('user.usro.eliminar', {
            url: '/eliminar',
            data: { pageTitle: 'Usuario Eliminar' },
            templateUrl: 'views/usroEliminar.html'
        })
        .state('user.usro.general', {
            url: '/general',
            data: { pageTitle: 'Usuarios General' },
            templateUrl: 'views/usroGeneral.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('user.estf', {
            url: '/estf',
            template: '<div ui-view></div>',
            abstract: true
        })



        .state('user.estf.nuevo', {
            url: '/nuevo',
            data: { pageTitle: 'Estufa Nuevo' },
            templateUrl: 'views/estfNuevo.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/parsley/dist/parsley.js',
                            'assets/plugins/bootstrap-wizard/js/bwizard.js',
                        ]
                    });
                }]
            }
        })
        .state('user.estf.id', {
            url: '/:estfID',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('user.estf.id.editar', {
            url: '/editar',
            data: { pageTitle: 'Estufa  Editar' },
            templateUrl: 'views/estfEditar.html'
        })
        .state('user.estf.id.consultar', {
            url: '/consultar',
            data: { pageTitle: 'Estufa Consultar' },
            templateUrl: 'views/estfConsultar.html'
        })
        .state('user.estf.id.eliminar', {
            url: '/eliminar',
            data: { pageTitle: 'Estufa Eliminar' },
            templateUrl: 'views/estfEliminar.html'
        })
        .state('user.estf.general', {
            url: '/general',
            data: { pageTitle: 'Estufas General' },
            templateUrl: 'views/estfGeneral.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        files: [
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js'
                        ]
                    });
                }]
            }
        })
        .state('user.dashboard', {
            url: '/dashboard',
            data: { pageTitle: 'Dashboard' },
            templateUrl: 'views/index.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
                        name: 'angles',
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
                            'assets/plugins/gritter/js/jquery.gritter.js',
                            'assets/plugins/chart-js/chart.js',
                            'assets/plugins/DataTables/media/css/dataTables.bootstrap.min.css',
                            'assets/plugins/DataTables/extensions/Responsive/css/responsive.bootstrap.min.css',
                            'assets/plugins/DataTables/media/js/jquery.dataTables.js',
                            'assets/plugins/DataTables/media/js/dataTables.bootstrap.min.js',
                            'assets/plugins/DataTables/extensions/Responsive/js/dataTables.responsive.min.js',
                            'assets/plugins/chart-js/angular/angles.js'
                        ]
                    })
                }]
            }
        })
        .state('login', {
            url: '/login',
            data: { pageTitle: 'Login' },
            templateUrl: 'views/login.html'
        })
        .state('user.tnda', {
            url: '/tnda',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('user.tnda.general', {
            url: '/general',
            data: { pageTitle: 'Tendencia General' },
            templateUrl: 'views/tndaGeneral.html',
            resolve: {
                service: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        serie: true,
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
                            'assets/plugins/gritter/js/jquery.gritter.js',
                            'assets/plugins/chart-js/chart.js',
                            'assets/plugins/chart-js/angular/angles.js'
                        ]
                    });
                }]
            }
        })

}]);

colorAdminApp.run(['$rootScope', '$state', 'setting', function($rootScope, $state, setting) {
    $rootScope.$state = $state;
    $rootScope.setting = setting;
}]);