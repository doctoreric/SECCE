/*
 Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.5
 Version: 1.9.0
 Author: Sean Ngu
 Website: http://www.seantheme.com/color-admin-v1.9/admin/
 ----------------------------
 APPS CONTROLLER TABLE
 ----------------------------
 1.0 CONTROLLER - App
 2.0 CONTROLLER - Sidebar
 3.0 CONTROLLER - Right Sidebar
 4.0 CONTROLLER - Header
 5.0 CONTROLLER - Top Menu
 6.0 CONTROLLER - Page Loader
 7.0 CONTROLLER - Theme Panel
 8.0 CONTROLLER - Dashboard v1
 9.0 CONTROLLER - Dashboard v2
 59.0 CONTROLLER - Login V2

 <!-- ======== GLOBAL SCRIPT SETTING ======== -->
 */


var blue		= '#348fe2',
    blueLight	= '#5da5e8',
    blueDark	= '#1993E4',
    aqua		= '#49b6d6',
    aquaLight	= '#6dc5de',
    aquaDark	= '#3a92ab',
    green		= '#00acac',
    greenLight	= '#33bdbd',
    greenDark	= '#008a8a',
    orange		= '#f59c1a',
    orangeLight	= '#f7b048',
    orangeDark	= '#c47d15',
    dark		= '#2d353c',
    grey		= '#b6c2c9',
    purple		= '#727cb6',
    purpleLight	= '#8e96c5',
    purpleDark	= '#5b6392',
    red         = '#ff5b57';


/* -------------------------------
 1.0 CONTROLLER - App
 ------------------------------- */
colorAdminApp.controller('appController', ['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.$on('$includeContentLoaded', function() {
        App.initComponent();
    });
    $scope.$on('$viewContentLoaded', function() {
        App.initComponent();
        App.initLocalStorage();
    });
    $scope.$on('$stateChangeStart', function() {
        // reset layout setting
        $rootScope.setting.layout.pageSidebarMinified = false;
        $rootScope.setting.layout.pageFixedFooter = false;
        $rootScope.setting.layout.pageRightSidebar = false;
        $rootScope.setting.layout.pageTwoSidebar = false;
        $rootScope.setting.layout.pageTopMenu = false;
        $rootScope.setting.layout.pageBoxedLayout = false;
        $rootScope.setting.layout.pageWithoutSidebar = false;
        $rootScope.setting.layout.pageContentFullHeight = false;
        $rootScope.setting.layout.pageContentFullWidth = false;
        $rootScope.setting.layout.paceTop = false;
        $rootScope.setting.layout.pageLanguageBar = false;
        $rootScope.setting.layout.pageSidebarTransparent = true;
        $rootScope.setting.layout.pageWideSidebar = false;
        $rootScope.setting.layout.pageLightSidebar = false;
        $rootScope.setting.layout.pageFooter = false;
        $rootScope.setting.layout.pageMegaMenu = false;
        $rootScope.setting.layout.pageWithoutHeader = false;
        $rootScope.setting.layout.pageBgWhite = false;

        App.scrollTop();
        $('.pace .pace-progress').addClass('hide');
        $('.pace').removeClass('pace-inactive');
    });
    $scope.$on('$stateChangeSuccess', function() {
        Pace.restart();
        App.initPageLoad();
        App.initSidebarSelection();
        App.initLocalStorage();
        App.initSidebarMobileSelection();
    });
    $scope.$on('$stateNotFound', function() {
        Pace.stop();
    });
    $scope.$on('$stateChangeError', function() {
        Pace.stop();
    });
}]);



/* -------------------------------
 2.0 CONTROLLER - Sidebar
 ------------------------------- */
colorAdminApp.controller('sidebarController', ['$scope','$http' ,'$location', function($scope ,$http,$location) {
    $scope.user = $location.url();
    $scope.user= $scope.user.split('/',2);
    $http.post('json/usroAll.php',{nombre : $scope.user[1]}).
        success(function(data) {
            $scope.usuarios = data;
        });
    App.initSidebar();
}]);



/* -------------------------------
 3.0 CONTROLLER - Right Sidebar
 ------------------------------- */
colorAdminApp.controller('rightSidebarController', function($scope, $rootScope, $state) {
    var getRandomValue = function() {
        var value = [];
        for (var i = 0; i<= 19; i++) {
            value.push(Math.floor((Math.random() * 10) + 1));
        }
        return value;
    };

    $('.knob').knob();

    var blue		= '#348fe2', green		= '#00acac', purple		= '#727cb6', red         = '#ff5b57';
    var options = { height: '50px', width: '100%', fillColor: 'transparent', type: 'bar', barWidth: 8, barColor: green };

    var value = getRandomValue();
    $('#sidebar-sparkline-1').sparkline(value, options);

    value = getRandomValue();
    options.barColor = blue;
    $('#sidebar-sparkline-2').sparkline(value, options);

    value = getRandomValue();
    options.barColor = purple;
    $('#sidebar-sparkline-3').sparkline(value, options);

    value = getRandomValue();
    options.barColor = red;
    $('#sidebar-sparkline-4').sparkline(value, options);
});



/* -------------------------------
 4.0 CONTROLLER - Header
 ------------------------------- */
colorAdminApp.controller('headerController', function($scope, $rootScope, $state) {
});



/* -------------------------------
 5.0 CONTROLLER - Top Menu
 ------------------------------- */
colorAdminApp.controller('topMenuController', function($scope, $rootScope, $state) {
    setTimeout(function() {
        App.initTopMenu();
    }, 0);
});



/* -------------------------------
 6.0 CONTROLLER - Page Loader
 ------------------------------- */
colorAdminApp.controller('pageLoaderController', function($scope, $rootScope, $state) {
    App.initPageLoad();
});



/* -------------------------------
 7.0 CONTROLLER - Theme Panel
 ------------------------------- */
colorAdminApp.controller('themePanelController', function($scope, $rootScope, $state) {
    App.initThemePanel();
});





/* -------------------------------
 9.0 CONTROLLER - Dashboard v2
 ------------------------------- */
colorAdminApp.controller('dashboardV2Controller', function($scope, $rootScope, $state) {

    /* Line Chart
     ------------------------- */
    var green = '#0D888B';
    var greenLight = '#00ACAC';
    var blue = '#3273B1';
    var blueLight = '#348FE2';
    var blackTransparent = 'rgba(0,0,0,0.6)';
    var whiteTransparent = 'rgba(255,255,255,0.4)';
    var month = [];
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    Morris.Line({
        element: 'visitors-line-chart',
        data: [
            {x: '2014-02-01', y: 60, z: 30},
            {x: '2014-03-01', y: 70, z: 40},
            {x: '2014-04-01', y: 40, z: 10},
            {x: '2014-05-01', y: 100, z: 70},
            {x: '2014-06-01', y: 40, z: 10},
            {x: '2014-07-01', y: 80, z: 50},
            {x: '2014-08-01', y: 70, z: 40}
        ],
        xkey: 'x',
        ykeys: ['y', 'z'],
        xLabelFormat: function(x) {
            x = month[x.getMonth()];
            return x.toString();
        },
        labels: ['Page Views', 'Unique Visitors'],
        lineColors: [green, blue],
        pointFillColors: [greenLight, blueLight],
        lineWidth: '2px',
        pointStrokeColors: [blackTransparent, blackTransparent],
        resize: true,
        gridTextFamily: 'Open Sans',
        gridTextColor: whiteTransparent,
        gridTextWeight: 'normal',
        gridTextSize: '11px',
        gridLineColor: 'rgba(0,0,0,0.5)',
        hideHover: 'auto'
    });

    /* Donut Chart
     ------------------------- */
    var green = '#00acac';
    var blue = '#348fe2';
    Morris.Donut({
        element: 'visitors-donut-chart',
        data: [
            {label: "New Visitors", value: 900},
            {label: "Return Visitors", value: 1200}
        ],
        colors: [green, blue],
        labelFamily: 'Open Sans',
        labelColor: 'rgba(255,255,255,0.4)',
        labelTextSize: '12px',
        backgroundColor: '#242a30'
    });


    /* Vector Map
     ------------------------- */
    map = new jvm.WorldMap({
        map: 'world_merc_en',
        scaleColors: ['#e74c3c', '#0071a4'],
        container: $('#visitors-map'),
        normalizeFunction: 'linear',
        hoverOpacity: 0.5,
        hoverColor: false,
        markerStyle: {
            initial: {
                fill: '#4cabc7',
                stroke: 'transparent',
                r: 3
            }
        },
        regions: [{ attribute: 'fill' }],
        regionStyle: {
            initial: {
                fill: 'rgb(97,109,125)',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 0.4,
                "stroke-opacity": 1
            },
            hover: { "fill-opacity": 0.8 },
            selected: { fill: 'yellow' }
        },
        series: {
            regions: [{
                values: {
                    IN:'#00acac',
                    US:'#00acac',
                    KR:'#00acac'
                }
            }]
        },
        focusOn: { x: 0.5, y: 0.5, scale: 2 },
        backgroundColor: '#2d353c'
    });


    /* Calendar
     ------------------------- */
    var monthNames = ["January", "February", "March", "April", "May", "June",  "July", "August", "September", "October", "November", "December"];
    var dayNames = ["S", "M", "T", "W", "T", "F", "S"];
    var now = new Date(),
        month = now.getMonth() + 1,
        year = now.getFullYear();
    var events = [[
        '2/' + month + '/' + year,
        'Popover Title',
        '#',
        '#00acac',
        'Some contents here'
    ], [
        '5/' + month + '/' + year,
        'Tooltip with link',
        'http://www.seantheme.com/color-admin-v1.3',
        '#2d353c'
    ], [
        '18/' + month + '/' + year,
        'Popover with HTML Content',
        '#',
        '#2d353c',
        'Some contents here <div class="text-right"><a href="http://www.google.com">view more >>></a></div>'
    ], [
        '28/' + month + '/' + year,
        'Color Admin V1.3 Launched',
        'http://www.seantheme.com/color-admin-v1.3',
        '#2d353c',
    ]];
    var calendarTarget = $('#schedule-calendar');
    $(calendarTarget).calendar({
        months: monthNames,
        days: dayNames,
        events: events,
        popover_options:{
            placement: 'top',
            html: true
        }
    });
    $(calendarTarget).find('td.event').each(function() {
        var backgroundColor = $(this).css('background-color');
        $(this).removeAttr('style');
        $(this).find('a').css('background-color', backgroundColor);
    });
    $(calendarTarget).find('.icon-arrow-left, .icon-arrow-right').parent().on('click', function() {
        $(calendarTarget).find('td.event').each(function() {
            var backgroundColor = $(this).css('background-color');
            $(this).removeAttr('style');
            $(this).find('a').css('background-color', backgroundColor);
        });
    });


    /* Gritter Notification
     ------------------------- */
    setTimeout(function() {
        $.gritter.add({
            title: 'Welcome back, Admin!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus lacus ut lectus rutrum placerat.',
            image: 'assets/img/user-14.jpg',
            sticky: true,
            time: '',
            class_name: 'my-sticky-class'
        });
    }, 1000);
});




/* -------------------------------
 59.0 CONTROLLER - Login V2
 ------------------------------- */

colorAdminApp.controller('loginV2Controller', function($scope, $rootScope, $location,$http) {
    $rootScope.setting.layout.pageWithoutHeader = true;
    $rootScope.setting.layout.paceTop = true;
    $scope.usuario = {};
    $scope.submitForm = function(form) {
        $http.post('json/usroOne.php',{nombre : $scope.usuario.nombre ,password: $scope.usuario.password})
            .success(function(data){
                if(data==""){
                    bootbox.alert("Usuario o Contraseña Incorrecta");
                }
                else{
                    $scope.id = data;
                    $location.url($scope.id[0].usro_id +  "/dashboard");
                }
    });
    };

    $('[data-click="change-bg"]').click(function() {
        var targetImage = '[data-id="login-cover-image"]';
        var targetImageSrc = $(this).find('img').attr('src');
        var targetImageHtml = '<img src="'+ targetImageSrc +'" data-id="login-cover-image" />';

        $('.login-cover-image').prepend(targetImageHtml);
        $(targetImage).not('[src="'+ targetImageSrc +'"]').fadeOut('slow', function() {
            $(this).remove();
        });
        $('[data-click="change-bg"]').closest('li').removeClass('active');
        $(this).closest('li').addClass('active');
    });
});
