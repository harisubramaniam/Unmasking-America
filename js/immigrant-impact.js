(function (H) {
    function deferRender (proceed) {
        var series = this, 
            $renderTo = $(this.chart.container.parentNode);

        // It is appeared, render it
        if ($renderTo.is(':appeared') || !series.options.animation) {
            proceed.call(series);
            
        // It is not appeared, halt renering until appear
        } else  {
            $renderTo.appear(); // Initialize appear plugin
            $renderTo.on('appear', function () {
                proceed.call(series);
            });
        }
    };
    
    H.wrap(H.Series.prototype, 'render', deferRender);
    
}(Highcharts));

Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Avenir Next'
        },
        backgroundColor: '#FFFFFF'
    },
    exporting: {
        enabled: false
    }
});

// Businesses started pie
Highcharts.chart('container1', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: '2016 businesses started',
        style: {
            fontWeight: '500'
        }
    },
    credits: {
        enabled: false,
        position: {
            align: 'left',
            x: 200
        },
        text: '',
        href: null
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y}%</b>',
        // headerFormat: '<b>{point.key} </b><br />'
    },
    plotOptions: {
        pie: {
            allowPointSelect: false,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: false
        },
        series: {
            animation: {
                duration: 2000
            }
        }
    },
    series: [{
        name: 'Businesses started',
        colorByPoint: true,
        data: [{
            name: 'Foreign born',
            y: 52,
            sliced: true,
            selected: true,
            color: '#728F89'
        }, {
            name: 'Native born',
            y: 26,
            color: '#14262E'
        }]
    }]
});
// GDP pie
// Highcharts.chart('container2', {
//     chart: {
//         plotBackgroundColor: null,
//         plotBorderWidth: null,
//         plotShadow: false,
//         type: 'pie'
//     },
//     title: {
//         text: '2020 GDP',
//         style: {
//             fontWeight: '500'
//         }
//     },
//     credits: {
//         position: {
//             align: 'left',
//             x: 150
//         },
//         text: 'SOURCE: New American Economy - in an email',
//         href: null
//     },
//     tooltip: {
//         pointFormat: '{series.name}: <b>${point.y} Billion</b>',
//         // headerFormat: '<b>{point.key} </b><br />'
//     },
//     plotOptions: {
//         pie: {
//             allowPointSelect: true,
//             cursor: 'pointer',
//             dataLabels: {
//                 enabled: false
//             },
//             showInLegend: false
//         },
//         series: {
//             animation: {
//                 duration: 2000
//             }
//         }
//     },
//     series: [{
//         name: 'GDP contribution',
//         colorByPoint: true,
//         data: [{
//             name: 'Foreign born',
//             y: 4.9,
//             sliced: true,
//             selected: true,
//             color: '#728F89'
//         }, {
//             name: 'Native born',
//             y: 68.9,
//             color: '#14262E'
//         }]
//     }]
// });