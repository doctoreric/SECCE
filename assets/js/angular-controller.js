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

/* -------------------------------
 8.0 CONTROLLER - index Controller
 ------------------------------- */

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
    $http.post('json/gsesPromedio.php').
        success(function(data90) {
            $scope.gases = data90;
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
    $scope.data21 = [];
    $http.post('json/estfGeneral.php').
        success(function(data20){
            var estf = data20;
            //$scope.data21 = [[estf[0].estf_id,estf[0].estf_nombre,estf[0].estf_modelo,estf[0].estf_ip,estf[0].estf_mac,estf[0].estf_comentarios]];
           for(j=0;j<100;j++){
               $scope.data21[j]=[];
               $scope.data21[j].push(estf[j].estf_id);
               $scope.data21[j].push(estf[j].estf_nombre);
               $scope.data21[j].push(estf[j].estf_modelo);
               $scope.data21[j].push(estf[j].estf_ip);
               $scope.data21[j].push(estf[j].estf_mac);
               $scope.data21[j].push(estf[j].estf_comentarios);
           }

        });


    $http.post('json/gsesNoxS.php').
        success(function(data9) {
            var noxs = data9;
            for (i=0;i<10;i++){
                $scope.data12.push(Math.round(noxs[i].emision));
            }
            console.log($scope.data21);$('#data-table').DataTable({
                responsive: true,
                data : $scope.data21
            });
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
    var pieChartData = [
        { value: 300, color: fillGrey, highlight: highlightFillGrey, label: 'Lenga' },
        { value: 50, color: fillGreen, highlight: highlightFillGreen, label: 'Pino' },
        { value: 100, color: fillBlue, highlight: highlightFillBlue, label: 'Eucaliptus' },
        { value: 40, color: fillPurple, highlight: highlightFillPurple, label: 'Roble' },
        { value: 120, color: fillBlack, highlight: highlightFillBlack, label: 'Otras maderas' }
    ];



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
/* -------------------------------
 8.0 CONTROLLER - Tendencia Controller
 ------------------------------- */
colorAdminApp.controller('tndaCtrl', function($scope, $http, $location,$rootScope, $state) {
    $scope.data12 = [];
    $scope.data13 = [];
    $scope.data14 = [];
    $scope.data15 = [];
    $http.post('json/tempTend.php').
        success(function(data9) {
            var noxs = data9;
            for (i=0;i<20;i++){
                $scope.data12[i]=[];
                $scope.data12[i].push(i,noxs[i].temp);
            }console.log($scope.data12);
        });
    $http.post('json/tempTend2.php').
        success(function(data9) {
            var noxs = data9;
            for (i=0;i<20;i++){
                $scope.data13[i]=[];
                $scope.data13[i].push(i,noxs[i].temp);
            }console.log($scope.data13);
        });

    $http.post('json/tempCald.php').
        success(function(data9) {
            var noxs = data9;
            for (i=0;i<20;i++){
                $scope.data14[i]=[];
                $scope.data14[i].push(i,noxs[i].temp);
            }console.log($scope.data14);
        });
    $http.post('json/tempCald2.php').
        success(function(data9) {
            var noxs = data9;
            for (i=0;i<20;i++){
                $scope.data15[i]=[];
                $scope.data15[i].push(i,noxs[i].temp);
            }console.log($scope.data15);
        });
    /* Stacked Chart
     ------------------------- */
    var d1 = [], d2 = [], d3 = [], d4 = [], d5 = [], d6 = [];
    for (var a = 0; a <= 5; a += 1) {
        d1.push([a, parseInt(Math.random() * 5)]);
        d2.push([a, parseInt(Math.random() * 5 + 5)]);
        d3.push([a, parseInt(Math.random() * 5 + 5)]);
        d4.push([a, parseInt(Math.random() * 5 + 5)]);
        d5.push([a, parseInt(Math.random() * 5 + 5)]);
        d6.push([a, parseInt(Math.random() * 5 + 5)]);
    }
    var ticksLabel = [[0, "Monday"], [1, "Tuesday"], [2, "Wednesday"], [3, "Thursday"], [4, "Friday"], [5, "Saturday"]];
    var stackedChartOptions = {
        xaxis: {  tickColor: 'transparent',  ticks: ticksLabel},
        yaxis: {  tickColor: '#ddd', ticksLength: 10},
        grid: {  hoverable: true,  tickColor: "#ccc", borderWidth: 0, borderColor: 'rgba(0,0,0,0.2)' },
        series: {
            stack: true,
            lines: { show: false, fill: false, steps: false },
            bars: { show: true, barWidth: 0.5, align: 'center', fillColor: null },
            highlightColor: 'rgba(0,0,0,0.8)'
        },
        legend: { show: true, labelBoxBorderColor: '#ccc', position: 'ne', noColumns: 1 }
    };
    var stackedChartData = [
        { data:d1, color: purpleDark, label: 'China', bars: { fillColor: purpleDark } },
        { data:d2, color: purple, label: 'Russia', bars: { fillColor: purple } },
        { data:d3, color: purpleLight, label: 'Canada', bars: { fillColor: purpleLight } },
        { data:d4, color: blueDark, label: 'Japan', bars: { fillColor: blueDark } },
        { data:d5, color: blue, label: 'USA', bars: { fillColor: blue } },
        { data:d6, color: blueLight, label: 'Others', bars: { fillColor: blueLight } }
    ];

    var previousXValue = null;
    var previousYValue = null;
    $("#stacked-chart").bind("plothover", function (event, pos, item) {
        if (item) {
            var y = item.datapoint[1] - item.datapoint[2];
            if (previousXValue != item.series.label || y != previousYValue) {
                previousXValue = item.series.label;
                previousYValue = y;
                $("#tooltip").remove();
                $('<div id="tooltip" class="flot-tooltip">' + item.series.label + '</div>').css({ top: item.pageY, left: item.pageX + 35 }).appendTo("body").fadeIn(200);
            }
        } else {
            $("#tooltip").remove();
            previousXValue = null;
            previousYValue = null;
        }
    });

    this.stackedChartOptions = stackedChartOptions;
    this.stackedChartData = stackedChartData;


    /* Tracking Chart
     ------------------------- */
    var sin = [], cos = [];
    for (var i = 0; i < 14; i += 0.1) {
        sin.push([i, Math.sin(i)]);
        cos.push([i, Math.cos(i)]);
    }

    var trackingChartData = [
        { data: sin, label: "Series1", color: dark, shadowSize: 0},
        { data: cos, label: "Series2", color: red, shadowSize: 0}
    ];
    var trackingChartOptions = {
        series: { lines: { show: true } },
        crosshair: { mode: "x", color: grey },
        grid: { hoverable: true, autoHighlight: false, borderColor: '#ccc', borderWidth: 0 },
        xaxis: {  tickLength: 0 },
        yaxis: {  tickColor: '#ddd' },
        legend: {
            labelBoxBorderColor: '#ddd',
            backgroundOpacity: 0.4,
            color:'#fff',
            show: true
        }
    };
    this.trackingChartData = trackingChartData;
    this.trackingChartOptions = trackingChartOptions;


    /* Bar Chart
     ------------------------- */
    var barChartData = [{
        data: [ ["Enero", 30], ["Febrero", 29], ["Marzo", 39], ["Abril", 42], ["Mayo", 51], ["Junio", 79] ,["Julio",88],["Agosto",58],
        ["Sept",66],["Octubre",44],["Novi",40],["Dicienbre",45]],
        color: purple
    }];
    var barChartOptions = {
        series: {
            bars: {
                show: true, barWidth: 0.5, align: 'center', fill: true, fillColor: purple, zero: true
            }
        },
        xaxis: { mode: "categories", tickColor: '#ddd', tickLength: 0 },
        grid: { borderWidth: 0 }
    };
    this.barChartData = barChartData;
    this.barChartOptions = barChartOptions;

    var barChartData2 = [{
        data: [ ["Enero", 70], ["Febrero", 60], ["Marzo", 45], ["Abril", 38], ["Mayo", 31], ["Junio", 29] ,["Julio",18],["Agosto",20],
            ["Sept",46],["Octubre",54],["Novi",56],["Dicienbre",65]],
        color: purple
    }];
    var barChartOptions2 = {
        series: {
            bars: {
                show: true, barWidth: 0.5, align: 'center', fill: true, fillColor: purple, zero: true
            }
        },
        xaxis: { mode: "categories", tickColor: '#ddd', tickLength: 0 },
        grid: { borderWidth: 0 }
    };
    this.barChartData2 = barChartData2;
    this.barChartOptions2 = barChartOptions2;
    /* Pie Chart
     ------------------------- */
    var pieChartData = [];
    var series = 3;
    var colorArray = [purple, dark, grey];
    for (var i=0; i<series; i++) {
        pieChartData[i] = { label: "Series"+(i+1), data: Math.floor(Math.random()*100)+1, color: colorArray[i] };
    }
    var pieChartOptions = {
        series: {
            pie: {
                show: true
            }
        },
        grid: { hoverable: true, clickable: true },
        legend: { labelBoxBorderColor: '#ddd', backgroundColor: 'none' }
    };
    this.pieChartData = pieChartData;
    this.pieChartOptions = pieChartOptions;


    /* Donut Chart
     ------------------------- */
    var donutChartData = [];
    var donutChartOptions = {
        series: {
            pie: {
                innerRadius: 0.5,
                show: true,
                combine: { color: '#999', threshold: 0.1 }
            }
        },
        grid:{ borderWidth:0, hoverable: true, clickable: true },
        legend: { show: false }
    };
    var colorArray = [dark, green, purple,orange];
    var nameArray = ['Lenga', 'Pino', 'Roble', 'Eucaliptus'];
    var dataArray = [40,14,10,21];
    for( var i = 0; i<4; i++) {
        donutChartData[i] = { label: nameArray[i], data: dataArray[i], color: colorArray[i] };
    }

    this.donutChartData = donutChartData;
    this.donutChartOptions = donutChartOptions;


    /* Interactive Chart
     ------------------------- */
    var interactiveChartOptions = {
        xaxis: {  tickColor: '#ddd',tickSize: 1 },
        yaxis: {  tickColor: '#ddd', tickSize: 1 },
        grid: {  hoverable: true,  clickable: true, tickColor: "#ccc", borderWidth: 1, borderColor: '#ddd' },
        legend: { labelBoxBorderColor: '#ddd', margin: 0, noColumns: 1, show: true }
    };

    var interactiveChartData = [{
        data: $scope.data12,
        label: "Temperatura promedio",
        color: purple,
        lines: { show: true, fill:false, lineWidth: 2 },
        points: { show: false, radius: 5, fillColor: '#fff' },
        shadowSize: 0
    }, {
        data: $scope.data13,
        label: 'Mas eficiente',
        color: green,
        lines: { show: true, fill:false, lineWidth: 2, fillColor: '' },
        points: { show: false, radius: 3, fillColor: '#fff' },
        shadowSize: 0
    }];

    this.interactiveChartOptions = interactiveChartOptions;
    this.interactiveChartData = interactiveChartData;
    var previousPoint = null;

    var interactiveChartOptions2 = {
        xaxis: {  tickColor: '#ddd',tickSize: 1 },
        yaxis: {  tickColor: '#ddd', tickSize: 20 },
        grid: {  hoverable: true,  clickable: true, tickColor: "#ccc", borderWidth: 1, borderColor: '#ddd' },
        legend: { labelBoxBorderColor: '#ddd', margin: 0, noColumns: 1, show: true }
    };

    var interactiveChartData2 = [{
        data: $scope.data14,
        label: "Caldera 1",
        color: purple,
        lines: { show: true, fill:false, lineWidth: 2 },
        points: { show: false, radius: 5, fillColor: '#fff' },
        shadowSize: 0
    }, {
        data: $scope.data15,
        label: 'Caldera 2',
        color: green,
        lines: { show: true, fill:false, lineWidth: 2, fillColor: '' },
        points: { show: false, radius: 3, fillColor: '#fff' },
        shadowSize: 0
    }];

    this.interactiveChartOptions2 = interactiveChartOptions2;
    this.interactiveChartData2 = interactiveChartData2;
    var previousPoint = null;

    $("#interactive-chart").bind("plothover", function (event, pos, item) {
        $("#x").text(pos.x.toFixed(2));
        $("#y").text(pos.y.toFixed(2));
        if (item) {
            if (previousPoint !== item.dataIndex) {
                previousPoint = item.dataIndex;
                $("#tooltip").remove();
                var y = item.datapoint[1].toFixed(2);
                var content = item.series.label + " " + y;
                $('<div id="tooltip" class="flot-tooltip">' + content + '</div>').css({ top: item.pageY - 45, left: item.pageX - 55 }).appendTo("body").fadeIn(200);
            }
        } else {
            $("#tooltip").remove();
            previousPoint = null;
        }
        event.preventDefault();
    });$("#interactive-chart2").bind("plothover", function (event, pos, item) {
        $("#x").text(pos.x.toFixed(2));
        $("#y").text(pos.y.toFixed(2));
        if (item) {
            if (previousPoint !== item.dataIndex) {
                previousPoint = item.dataIndex;
                $("#tooltip").remove();
                var y = item.datapoint[1].toFixed(2);
                var content = item.series.label + " " + y;
                $('<div id="tooltip" class="flot-tooltip">' + content + '</div>').css({ top: item.pageY - 45, left: item.pageX - 55 }).appendTo("body").fadeIn(200);
            }
        } else {
            $("#tooltip").remove();
            previousPoint = null;
        }
        event.preventDefault();
    });




});

/* -------------------------------
 9.0 CONTROLLER - Estufa Editar Controller
 ------------------------------- */

colorAdminApp.controller('estfEditarCtrl', function($scope,$http,$rootScope, $location) {
    $scope.id = $scope.user = $location.url();
    $scope.id = $scope.user= $scope.user.split('/',4);
    $scope.nombre="-";
    $scope.user = $location.url();
    $scope.user= $scope.user.split('/',2);
    $http.post('json/estfOne.php',{id : $scope.id[3]})
        .success(function(data){
            var estufa = data;
            $scope.nombre = estufa[0].estf_nombre;
            $scope.modelo = estufa[0].estf_modelo;
            $scope.ip = estufa[0].estf_ip;
            $scope.mac = estufa[0].estf_mac;
            $scope.comentarios = estufa[0].estf_comentarios;
        });
    $scope.submitForm = function(form){
        $http.post('json/estfEdit.php',{nombre : $scope.nombre, modelo : $scope.modelo, ip : $scope.ip, mac : $scope.mac, comentarios : $scope.comentarios,id : $scope.id[3]})
            .success(function(data){
                if(data==""){
                    bootbox.alert("Error en la Edicion de la Estufa");
                }
                else{
                    bootbox.alert("Estufa Editada Correctamente");
                    $location.url($scope.user[1] +  "/estf/general");
                }
            });
    };
});
colorAdminApp.controller('estfNuevaCtrl', function($scope,$http,$rootScope, $location) {
    $scope.estufa = {};
    $scope.user = $location.url();
    $scope.user= $scope.user.split('/',2);
    $scope.submitForm = function(form){
        $http.post('json/estfNew.php',{nombre : $scope.estufa.nombre, modelo : $scope.estufa.modelo, ip : $scope.estufa.ip, mac : $scope.estufa.mac})
            .success(function(data){
                if(data==""){
                    bootbox.alert("Error en la Creacion de la Estufa");
                }
                else{
                    bootbox.alert("Estufa Creada Correctamente");
                    $location.url($scope.id[0].usro_id +  "/estf/general");
                }
            });
    };
});

/* -------------------------------
 10.0 CONTROLLER - Usuario General Controller
 ------------------------------- */
colorAdminApp.controller('usroGeneralCtrl', function($scope,$http,$rootScope, $state) {

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
});
/* -------------------------------
 11.0 CONTROLLER - Estufa General Controller
 ------------------------------- */
colorAdminApp.controller('estfGeneralCtrl', function($scope,$http,$rootScope, $state,$location) {
    var estf = [];
    var table = $('#data-table').DataTable({
        responsive: true,
        data : $scope.data21
    });
    $scope.data21 = [];
    $scope.user = $location.url();
    $scope.user= $scope.user.split('/',2);
    $http.post('json/usroAll.php',{nombre : $scope.user[1]}).
        success(function(data) {
            $scope.usuarios = data;
            table.destroy();
            table = $('#data-table').DataTable({
                responsive: true,
                data : $scope.data21
            });
        });
    for(i=0;$scope.data21==[] || i < 3 ;i++) {
        $http.post('json/estfGeneral.php').
            success(function (data20) {
                estf = data20;
                for (j = 0; j < 100; j++) {
                    $scope.data21[j] = [];
                    $scope.data21[j].push(estf[j].estf_id);
                    $scope.data21[j].push(estf[j].estf_nombre);
                    $scope.data21[j].push(estf[j].estf_modelo);
                    $scope.data21[j].push(estf[j].estf_ip);
                    $scope.data21[j].push(estf[j].estf_mac);
                    $scope.data21[j].push(estf[j].estf_comentarios);
                    $scope.data21[j].push("<a href='#/" + $scope.user[1] + "/estf/" + estf[j].estf_id + "/editar'><button class='btn btn-warning m-r-5 m-b-5'>Editar</button></a>")
                }
                table.destroy();
                table = $('#data-table').DataTable({
                    responsive: true,
                    data : $scope.data21
                });
            });
    }

});

colorAdminApp.controller('tmprGeneralCtrl', function($scope,$http,$rootScope, $state,$location) {
    var estf = [];
    var table = $('#data-table').DataTable({
        responsive: true,
        data : $scope.data21
    });
    $scope.data21 = [];
    $scope.user = $location.url();
    $scope.user= $scope.user.split('/',2);
    $http.post('json/usroAll.php',{nombre : $scope.user[1]}).
        success(function(data) {
            $scope.usuarios = data;
            table.destroy();
            table = $('#data-table').DataTable({
                responsive: true,
                data : $scope.data21
            });
        });
    for(i=0;$scope.data21==[] || i < 3 ;i++) {
        $http.post('json/tmprGeneral.php').
            success(function (data20) {
                estf = data20;
                for (j = 0; j< estf.length ; j++) {
                    $scope.data21[j] = [];
                    $scope.data21[j].push(estf[j].tmpr_id);
                    $scope.data21[j].push(estf[j].estf_id);
                    $scope.data21[j].push(estf[j].tmpr_ambiente);
                    $scope.data21[j].push(estf[j].tmpr_caldera_1);
                    $scope.data21[j].push(estf[j].tmpr_caldera_2);
                    $scope.data21[j].push(estf[j].tmpr_fecha);
                }
                table.destroy();
                table = $('#data-table').DataTable({
                    responsive: true,
                    data : $scope.data21
                });
            });
    }

});

colorAdminApp.controller('gsesGeneralCtrl', function($scope,$http,$rootScope, $state,$location) {
    var estf = [];
    var table = $('#data-table').DataTable({
        responsive: true,
        data : $scope.data21
    });
    $scope.data21 = [];
    $scope.user = $location.url();
    $scope.user= $scope.user.split('/',2);
    $http.post('json/usroAll.php',{nombre : $scope.user[1]}).
        success(function(data) {
            $scope.usuarios = data;
            table.destroy();
            table = $('#data-table').DataTable({
                responsive: true,
                data : $scope.data21
            });
        });
    for(i=0;$scope.data21==[] || i < 3 ;i++) {
        $http.post('json/gsesGeneral.php').
            success(function (data20) {
                estf = data20;
                for (j = 0; j<100 ; j++) {
                    $scope.data21[j] = [];
                    $scope.data21[j].push(estf[j].gses_id);
                    $scope.data21[j].push(estf[j].estf_id);
                    $scope.data21[j].push(estf[j].gses_co2);
                    $scope.data21[j].push(estf[j].gses_co);
                    $scope.data21[j].push(estf[j].gses_nox);
                    $scope.data21[j].push(estf[j].gses_calidad);
                    $scope.data21[j].push(estf[j].gses_fecha);
                }
                table.destroy();
                table = $('#data-table').DataTable({
                    responsive: true,
                    data : $scope.data21
                });
            });
    }

});

colorAdminApp.controller('hmdaGeneralCtrl', function($scope,$http,$rootScope, $state,$location) {
    var estf = [];
    var table = $('#data-table').DataTable({
        responsive: true,
        data : $scope.data21
    });
    $scope.data21 = [];
    $scope.user = $location.url();
    $scope.user= $scope.user.split('/',2);
    $http.post('json/usroAll.php',{nombre : $scope.user[1]}).
        success(function(data) {
            $scope.usuarios = data;
            table.destroy();
            table = $('#data-table').DataTable({
                responsive: true,
                data : $scope.data21
            });
        });
    for(i=0;$scope.data21==[] || i < 3 ;i++) {
        $http.post('json/hmdaGeneral.php').
            success(function (data20) {
                estf = data20;
                for (j = 0;j< estf.length ; j++) {
                    $scope.data21[j] = [];
                    $scope.data21[j].push(estf[j].hmda_id);
                    $scope.data21[j].push(estf[j].estf_id);
                    $scope.data21[j].push(estf[j].hmda_relativa);
                    $scope.data21[j].push(estf[j].hmda_fecha);
                }
                table.destroy();
                table = $('#data-table').DataTable({
                    responsive: true,
                    data : $scope.data21
                });
            });
    }

});
colorAdminApp.controller('cmbsGeneralCtrl', function($scope,$http,$rootScope, $state,$location) {
    var estf = [];
    var table = $('#data-table').DataTable({
        responsive: true,
        data : $scope.data21
    });
    $scope.data21 = [];
    $scope.user = $location.url();
    $scope.user= $scope.user.split('/',2);
    $http.post('json/usroAll.php',{nombre : $scope.user[1]}).
        success(function(data) {
            $scope.usuarios = data;
            table.destroy();
            table = $('#data-table').DataTable({
                responsive: true,
                data : $scope.data21
            });
        });
    for(i=0;$scope.data21==[] || i < 3 ;i++) {
        $http.post('json/cmbsGeneral.php').
            success(function (data20) {
                estf = data20;

                for (j = 0; j< estf.length ; j++) {
                    $scope.data21[j] = [];
                    $scope.data21[j].push(estf[j].cmbs_id);
                    $scope.data21[j].push(estf[j].estf_id);
                    $scope.data21[j].push(estf[j].cmbs_tipo);
                    $scope.data21[j].push(estf[j].cmbs_gasto);
                    $scope.data21[j].push(estf[j].cmbs_peso);
                    $scope.data21[j].push(estf[j].cmbs_fecha);

                }
                table.destroy();
                table = $('#data-table').DataTable({
                    responsive: true,
                    data : $scope.data21
                });
            });
    }

});
colorAdminApp.controller('cmbsNuevaCtrl', function($scope,$http,$rootScope, $location) {
    $scope.combustible = {};
    $scope.user = $location.url();
    $scope.user= $scope.user.split('/',2);
    $scope.submitForm = function(form){
        $http.post('json/cmbsNew.php',{
            id :    $scope.combustible.id,
            tipo:   $scope.combustible.tipo,
            gasto:  $scope.combustible.gasto,
            peso:   $scope.combustible.peso})
            .success(function(data){
                if(data!=""){
                    bootbox.alert("Error en la carga de combustible");
                }
                else{
                    bootbox.alert("Carga de Combustible Creada Correctamente");
                    $location.url($scope.user[1] +  "/cmbs/general");
                }
            });
    };
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
