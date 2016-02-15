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
colorAdminApp.controller('headerController', function($scope, $http, $rootScope, $state,$location) {
    $scope.user = $location.url();
    $scope.user= $scope.user.split('/',2);
    $http.post('json/usroAll.php',{nombre : $scope.user[1]}).
        success(function(data) {
            $scope.usuarios = data;
        });
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



colorAdminApp.controller('indexController', function($scope, $http, $location,$rootScope, $state) {
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
    $scope.user = $location.url();
    $scope.user= $scope.user.split('/',2);
    $http.post('json/usroAll.php',{nombre : $scope.user[1]}).
        success(function(data) {
            $scope.usuarios = data;
        });
    $http.post('json/estfMoni.php').
        success(function(data2) {
            $scope.estufa = data2;
        });
    $http.post('json/cmbsGastos.php').
        success(function(data3) {
            $scope.combustible = data3;
        });
    $http.post('json/cmbsConsum.php').
        success(function(data4) {
            $scope.consumo = data4;
        });
    $http.post('json/estfError.php').
        success(function(data5) {
            $scope.error = data5;
        });
    $scope.data10 = [];
    $http.post('json/gsesOctubre.php').
        success(function(data6) {
            var consumo2 = data6;
            for (i = 0; i < 12; i++) {
                $scope.agosto = Math.round(consumo2[i].consum);
                $scope.data10.push($scope.agosto);
            }
        });
    $http.post('json/gsesSum.php').
        success(function(data7) {
            $scope.gasessum = data7;
        });

    $scope.data11 = [];
    $http.post('json/gsesNox.php').
        success(function(data8) {
            var nox = data8;
            var ins = 1;
            for (i = 0; i < 10; i++) {
                var sum = 0;
                for(j=0;j<10;j++){
                    sum = sum + parseFloat(nox[ins].gses_nox);

                    ins++;
                }
                $scope.noxP = Math.round(sum / 10);
                $scope.data11.push($scope.noxP);


            }
        });
    $scope.data12 = [];
    $http.post('json/gsesNoxS.php').
        success(function(data9) {
            var noxs = data9;
            for (i=0;i<10;i++){
                $scope.data12.push(Math.round(noxs[i].emision));
                console.log($scope.data11);
            }
        });
    // white
    var white = 'rgba(255,255,255,1.0)';
    var fillBlack = 'rgba(45, 53, 60, 0.6)';
    var fillBlackLight = 'rgba(45, 53, 60, 0.2)';
    var strokeBlack = 'rgba(45, 53, 60, 0.8)';
    var highlightFillBlack = 'rgba(45, 53, 60, 0.8)';
    var highlightStrokeBlack = 'rgba(45, 53, 60, 1)';

    // blue
    var fillBlue = 'rgba(52, 143, 226, 0.6)';
    var fillBlueLight = 'rgba(52, 143, 226, 0.2)';
    var strokeBlue = 'rgba(52, 143, 226, 0.8)';
    var highlightFillBlue = 'rgba(52, 143, 226, 0.8)';
    var highlightStrokeBlue = 'rgba(52, 143, 226, 1)';

    // grey
    var fillGrey = 'rgba(182, 194, 201, 0.6)';
    var fillGreyLight = 'rgba(182, 194, 201, 0.2)';
    var strokeGrey = 'rgba(182, 194, 201, 0.8)';
    var highlightFillGrey = 'rgba(182, 194, 201, 0.8)';
    var highlightStrokeGrey = 'rgba(182, 194, 201, 1)';

    // green
    var fillGreen = 'rgba(0, 172, 172, 0.6)';
    var fillGreenLight = 'rgba(0, 172, 172, 0.2)';
    var strokeGreen = 'rgba(0, 172, 172, 0.8)';
    var highlightFillGreen = 'rgba(0, 172, 172, 0.8)';
    var highlightStrokeGreen = 'rgba(0, 172, 172, 1)';

    // purple
    var fillPurple = 'rgba(114, 124, 182, 0.6)';
    var fillPurpleLight = 'rgba(114, 124, 182, 0.2)';
    var strokePurple = 'rgba(114, 124, 182, 0.8)';
    var highlightFillPurple = 'rgba(114, 124, 182, 0.8)';
    var highlightStrokePurple = 'rgba(114, 124, 182, 1)';


    /* ChartJS Bar Chart
     ------------------------- */
    var randomScalingFactor = function() {
        return Math.round(Math.random()*100)
    };

    var barChartData = {
        labels : ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Nomviembre','Diciembre'],
        datasets : [{

            fillColor : fillBlueLight,
            strokeColor : strokeBlue,
            highlightFill: highlightFillBlue,
            highlightStroke: highlightStrokeBlue,
            data : $scope.data10
        }]
    };
    this.barChartData = barChartData;


    /* ChartJS Doughnut Chart
     ------------------------- */
    var doughnutChartData = [
        { value: 300, color: fillGrey, highlight: highlightFillGrey, label: 'Grey' },
        { value: 50, color: fillGreen, highlight: highlightFillGreen, label: 'Green' },
        { value: 100, color: fillBlue, highlight: highlightFillBlue, label: 'Blue' },
        { value: 40, color: fillPurple, highlight: highlightFillPurple, label: 'Purple' },
        { value: 120, color: fillBlack, highlight: highlightFillBlack, label: 'Black' }
    ];
    this.doughnutChartData = doughnutChartData;


    /* ChartJS Line Chart
     ------------------------- */
    var lineChartData = {
        labels : ['Prom 1','Prom 2','Prom 3','Prom 4','Prom 5','Prom 6','Prom 7','Prom 8','Prom 9'],
        datasets : [{
            label: 'My First dataset',
            fillColor : fillBlackLight,
            strokeColor : strokeBlack,
            pointColor : strokeBlack,
            pointStrokeColor : white,
            pointHighlightFill : white,
            pointHighlightStroke : strokeBlack,
            data : $scope.data11
        }, {
            label: 'My Second dataset',
            fillColor : 'rgba(52,143,226,0.2)',
            strokeColor : 'rgba(52,143,226,1)',
            pointColor : 'rgba(52,143,226,1)',
            pointStrokeColor : '#fff',
            pointHighlightFill : '#fff',
            pointHighlightStroke : 'rgba(52,143,226,1)',
            data : $scope.data12
        }]
    };
    this.lineChartData = lineChartData;


    /* ChartJS Pie Chart
     ------------------------- */
    var pieChartData = [
        { value: 300, color: strokePurple, highlight: highlightStrokePurple, label: 'Purple' },
        { value: 50, color: strokeBlue, highlight: highlightStrokeBlue, label: 'Blue' },
        { value: 100, color: strokeGreen, highlight: highlightStrokeGreen, label: 'Green' },
        { value: 40, color: strokeGrey, highlight: highlightStrokeGrey, label: 'Grey' },
        { value: 120, color: strokeBlack, highlight: highlightStrokeBlack, label: 'Black' }
    ];
    this.pieChartData = pieChartData;


    /* ChartJS Polar Chart
     ------------------------- */
    var polarChartData = [
        { value: 300, color: strokePurple, highlight: highlightStrokePurple, label: 'Purple' },
        { value: 50, color: strokeBlue, highlight: highlightStrokeBlue, label: 'Blue' },
        { value: 100, color: strokeGreen, highlight: highlightStrokeGreen, label: 'Green' },
        { value: 40, color: strokeGrey, highlight: highlightStrokeGrey, label: 'Grey' },
        { value: 120, color: strokeBlack, highlight: highlightStrokeBlack, label: 'Black' }
    ];
    this.polarChartData = polarChartData;


    /* ChartJS Radar Chart
     ------------------------- */
    var radarChartData = {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [{
            label: 'My First dataset',
            fillColor: 'rgba(45,53,60,0.2)',
            strokeColor: 'rgba(45,53,60,1)',
            pointColor: 'rgba(45,53,60,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(45,53,60,1)',
            data: [65,59,90,81,56,55,40]
        }, {
            label: 'My Second dataset',
            fillColor: 'rgba(52,143,226,0.2)',
            strokeColor: 'rgba(52,143,226,1)',
            pointColor: 'rgba(52,143,226,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(52,143,226,1)',
            data: [28,48,40,19,96,27,100]
        }]
    };
    this.radarChartData = radarChartData;


    /* ChartJS Chart Options
     ------------------------- */
    var chartOptions = {
        animation: true,
        animationSteps: 60,
        animationEasing: 'easeOutQuart',
        showScale: true,
        scaleOverride: false,
        scaleSteps: null,
        scaleStepWidth: null,
        scaleStartValue: null,
        scaleLineColor: 'rgba(0,0,0,.1)',
        scaleLineWidth: 1,
        scaleShowLabels: true,
        scaleLabel: '<%=value%>',
        scaleIntegersOnly: true,
        scaleBeginAtZero: false,
        scaleFontFamily: '"Open Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
        scaleFontSize: 12,
        scaleFontStyle: 'normal',
        scaleFontColor: '#707478',
        responsive: true,
        maintainAspectRatio: true,
        showTooltips: true,
        customTooltips: false,
        tooltipEvents: ['mousemove', 'touchstart', 'touchmove'],
        tooltipFillColor: 'rgba(0,0,0,0.8)',
        tooltipFontFamily: '"Open Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
        tooltipFontSize: 12,
        tooltipFontStyle: 'normal',
        tooltipFontColor: '#ccc',
        tooltipTitleFontFamily: '"Open Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
        tooltipTitleFontSize: 12,
        tooltipTitleFontStyle: 'bold',
        tooltipTitleFontColor: '#fff',
        tooltipYPadding: 10,
        tooltipXPadding: 10,
        tooltipCaretSize: 8,
        tooltipCornerRadius: 3,
        tooltipXOffset: 10,
        tooltipTemplate: '<%if (label){%><%=label%>: <%}%><%= value %>',
        multiTooltipTemplate: '<%= value %>',
        onAnimationProgress: function(){},
        onAnimationComplete: function(){}
    }
    this.chartOptions = chartOptions;


});

colorAdminApp.controller('tndaController', function($scope, $http, $location,$rootScope, $state) {
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
    $scope.user = $location.url();
    $scope.user= $scope.user.split('/',2);
    $http.post('json/usroAll.php',{nombre : $scope.user[1]}).
        success(function(data) {
            $scope.usuarios = data;
        });

    $scope.data10 = [];
    $http.post('json/gsesOctubre.php').
        success(function(data6) {
            var consumo2 = data6;
            for (i = 0; i < 12; i++) {
                $scope.agosto = (consumo2[i].consum);
                $scope.data10.push($scope.agosto);
            }
        });
    $http.post('json/gsesSum.php').
        success(function(data7) {
            $scope.gasessum = data7;
        });

    $scope.data11 = [];
    $http.post('json/gsesNox.php').
        success(function(data8) {
            var nox = data8;
            var ins = 1;
            for (i = 0; i < 10; i++) {
                var sum = 0;
                for(j=0;j<10;j++){
                    sum = sum + parseFloat(nox[ins].gses_nox);

                    ins++;
                }
                $scope.noxP = Math.round(sum / 10);
                $scope.data11.push($scope.noxP);


            }
        });
    $scope.data12 = [];
    $http.post('json/tempTend.php').
        success(function(data9) {
            var noxs = data9;
            for (i=0;i<20;i++){
                $scope.data12.push(noxs[i].temp);
                console.log($scope.data11);
            }
        });
    // white
    var white = 'rgba(255,255,255,1.0)';
    var fillBlack = 'rgba(45, 53, 60, 0.6)';
    var fillBlackLight = 'rgba(45, 53, 60, 0.2)';
    var strokeBlack = 'rgba(45, 53, 60, 0.8)';
    var highlightFillBlack = 'rgba(45, 53, 60, 0.8)';
    var highlightStrokeBlack = 'rgba(45, 53, 60, 1)';

    // blue
    var fillBlue = 'rgba(52, 143, 226, 0.6)';
    var fillBlueLight = 'rgba(52, 143, 226, 0.2)';
    var strokeBlue = 'rgba(52, 143, 226, 0.8)';
    var highlightFillBlue = 'rgba(52, 143, 226, 0.8)';
    var highlightStrokeBlue = 'rgba(52, 143, 226, 1)';

    // grey
    var fillGrey = 'rgba(182, 194, 201, 0.6)';
    var fillGreyLight = 'rgba(182, 194, 201, 0.2)';
    var strokeGrey = 'rgba(182, 194, 201, 0.8)';
    var highlightFillGrey = 'rgba(182, 194, 201, 0.8)';
    var highlightStrokeGrey = 'rgba(182, 194, 201, 1)';

    // green
    var fillGreen = 'rgba(0, 172, 172, 0.6)';
    var fillGreenLight = 'rgba(0, 172, 172, 0.2)';
    var strokeGreen = 'rgba(0, 172, 172, 0.8)';
    var highlightFillGreen = 'rgba(0, 172, 172, 0.8)';
    var highlightStrokeGreen = 'rgba(0, 172, 172, 1)';

    // purple
    var fillPurple = 'rgba(114, 124, 182, 0.6)';
    var fillPurpleLight = 'rgba(114, 124, 182, 0.2)';
    var strokePurple = 'rgba(114, 124, 182, 0.8)';
    var highlightFillPurple = 'rgba(114, 124, 182, 0.8)';
    var highlightStrokePurple = 'rgba(114, 124, 182, 1)';


    /* ChartJS Bar Chart
     ------------------------- */
    var randomScalingFactor = function() {
        return Math.round(Math.random()*100)
    };

    var barChartData = {
        labels : ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Nomviembre','Diciembre'],
        datasets : [{

            fillColor : fillBlueLight,
            strokeColor : strokeBlue,
            highlightFill: highlightFillBlue,
            highlightStroke: highlightStrokeBlue,
            data : $scope.data10
        }]
    };
    this.barChartData = barChartData;


    /* ChartJS Doughnut Chart
     ------------------------- */
    var doughnutChartData = [
        { value: 300, color: fillGrey, highlight: highlightFillGrey, label: 'Grey' },
        { value: 50, color: fillGreen, highlight: highlightFillGreen, label: 'Green' },
        { value: 100, color: fillBlue, highlight: highlightFillBlue, label: 'Blue' },
        { value: 40, color: fillPurple, highlight: highlightFillPurple, label: 'Purple' },
        { value: 120, color: fillBlack, highlight: highlightFillBlack, label: 'Black' }
    ];
    this.doughnutChartData = doughnutChartData;


    /* ChartJS Line Chart
     ------------------------- */
    var lineChartData = {
        labels : ['0',' 1 hr','1.5 hr',' 2 hr',' 2.5 hr',' 3 hr','3.5 hr',' 4 hr',' 4.5 hr',' 5 hr','5.5 hr','6 hr','6.5 hr','7 hr','7.5 hr','8 hr','8.5 hr','9 hr','9.5 hr'],
        datasets : [ {
            label: 'captura',
            fillColor : 'rgba(52,143,226,0.2)',
            strokeColor : 'rgba(52,143,226,1)',
            pointColor : 'rgba(52,143,226,1)',
            pointStrokeColor : '#fff',
            pointHighlightFill : '#fff',
            pointHighlightStroke : 'rgba(52,143,226,1)',
            data : $scope.data12
        }]
    };
    this.lineChartData = lineChartData;


    /* ChartJS Pie Chart
     ------------------------- */
    var pieChartData = [
        { value: 300, color: strokePurple, highlight: highlightStrokePurple, label: 'Purple' },
        { value: 50, color: strokeBlue, highlight: highlightStrokeBlue, label: 'Blue' },
        { value: 100, color: strokeGreen, highlight: highlightStrokeGreen, label: 'Green' },
        { value: 40, color: strokeGrey, highlight: highlightStrokeGrey, label: 'Grey' },
        { value: 120, color: strokeBlack, highlight: highlightStrokeBlack, label: 'Black' }
    ];
    this.pieChartData = pieChartData;


    /* ChartJS Polar Chart
     ------------------------- */
    var polarChartData = [
        { value: 300, color: strokePurple, highlight: highlightStrokePurple, label: 'Purple' },
        { value: 50, color: strokeBlue, highlight: highlightStrokeBlue, label: 'Blue' },
        { value: 100, color: strokeGreen, highlight: highlightStrokeGreen, label: 'Green' },
        { value: 40, color: strokeGrey, highlight: highlightStrokeGrey, label: 'Grey' },
        { value: 120, color: strokeBlack, highlight: highlightStrokeBlack, label: 'Black' }
    ];
    this.polarChartData = polarChartData;


    /* ChartJS Radar Chart
     ------------------------- */
    var radarChartData = {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [{
            label: 'My First dataset',
            fillColor: 'rgba(45,53,60,0.2)',
            strokeColor: 'rgba(45,53,60,1)',
            pointColor: 'rgba(45,53,60,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(45,53,60,1)',
            data: [65,59,90,81,56,55,40]
        }, {
            label: 'My Second dataset',
            fillColor: 'rgba(52,143,226,0.2)',
            strokeColor: 'rgba(52,143,226,1)',
            pointColor: 'rgba(52,143,226,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(52,143,226,1)',
            data: [28,48,40,19,96,27,100]
        }]
    };
    this.radarChartData = radarChartData;


    /* ChartJS Chart Options
     ------------------------- */
    var chartOptions = {
        animation: true,
        animationSteps: 60,
        animationEasing: 'easeOutQuart',
        showScale: true,
        scaleOverride: false,
        scaleSteps: null,
        scaleStepWidth: null,
        scaleStartValue: null,
        scaleLineColor: 'rgba(0,0,0,.1)',
        scaleLineWidth: 1,
        scaleShowLabels: true,
        scaleLabel: '<%=value%>',
        scaleIntegersOnly: true,
        scaleBeginAtZero: false,
        scaleFontFamily: '"Open Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
        scaleFontSize: 12,
        scaleFontStyle: 'normal',
        scaleFontColor: '#707478',
        responsive: true,
        maintainAspectRatio: true,
        showTooltips: true,
        customTooltips: false,
        tooltipEvents: ['mousemove', 'touchstart', 'touchmove'],
        tooltipFillColor: 'rgba(0,0,0,0.8)',
        tooltipFontFamily: '"Open Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
        tooltipFontSize: 12,
        tooltipFontStyle: 'normal',
        tooltipFontColor: '#ccc',
        tooltipTitleFontFamily: '"Open Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
        tooltipTitleFontSize: 12,
        tooltipTitleFontStyle: 'bold',
        tooltipTitleFontColor: '#fff',
        tooltipYPadding: 10,
        tooltipXPadding: 10,
        tooltipCaretSize: 8,
        tooltipCornerRadius: 3,
        tooltipXOffset: 10,
        tooltipTemplate: '<%if (label){%><%=label%>: <%}%><%= value %>',
        multiTooltipTemplate: '<%= value %>',
        onAnimationProgress: function(){},
        onAnimationComplete: function(){}
    }
    this.chartOptions = chartOptions;


});

colorAdminApp.controller('formUser', function($scope,$http,$rootScope, $state) {
    var handleBootstrapWizardsValidation = function() {
        "use strict";
        $("#wizard").bwizard({ validating: function (e, ui) {
            if (ui.index == 0) {
                // step-1 validation
                if (false === $('form[name="form-wizard"]').parsley().validate('wizard-step-1')) {
                    return false;
                }
            } else if (ui.index == 1) {
                // step-2 validation
                if (false === $('form[name="form-wizard"]').parsley().validate('wizard-step-2')) {
                    return false;
                }
            } else if (ui.index == 2) {
                // step-3 validation
                if (false === $('form[name="form-wizard"]').parsley().validate('wizard-step-3')) {
                    return false;
                }
            }
        }
        });
    };
    var FormWizardValidation = function () {
        "use strict";
        return {
            //main function
            init: function () {
                handleBootstrapWizardsValidation();
            }
        };
    }();

});

colorAdminApp.controller('tableManageDefaultController', function($scope,$http,$rootScope, $state) {

    if ($('#data-table').length !== 0) {
        $('#data-table').DataTable({
            responsive: true
        });
    }
    $scope.usuarios = [];
    $http.post('json/usroGeneral.php').
        success(function(data7) {
            $scope.usuarios = data7;
        });
    console.log($scope.usuarios);
});
colorAdminApp.controller('tableManageDefaultController2', function($scope,$http,$rootScope, $state) {

    if ($('#data-table').length !== 0) {
        $('#data-table').DataTable({
            responsive: true
        });
    }
    $scope.estufa = [];
    $http.post('json/estfGeneral.php').
        success(function(data7) {
            $scope.estufas = data7;
        });
    console.log($scope.estufas);
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
