$(function (H) {
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
            fontFamily: 'Montserrat',
            fontWeight: 400
        },
        type: 'line',
        spacingLeft: 0
    },
    lang: {
        thousandsSep: ','
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    }
});

$('#container').highcharts({

    title: {
        text: null
    },

    subtitle: {
        text: null
    },

    xAxis: {
        categories: ['Jan. 2020','Feb. 2020','March 2020','Apr. 2020','May 2020','June 2020','July 2020','Aug. 2020','Sept. 2020', 'Oct. 2020', 'Nov. 2020', 'Dec. 2020', 'Jan. 2021', 'Feb. 2021', 'March 2021', 'Apr. 2021', 'May 2021', 'June 2021'],
    },

    yAxis: {
        title: {
            text: 'Rate %age'
        },
        min: 0, 
    
        plotLines: [{
            value: 0,
            width: 1,
            color: '#ABAAA7'
        }]
    },

    plotOptions: {
        // spline: {
        //     marker: {
        //         enabled: false
        //     }
        // },
        series: {
            animation: {
                duration: 3000
            },
            marker: {
                lineWidth: 2
            },
            events: {
                legendItemClick: function() {
                    return false;
                }
            }
        }
    },

    legend: {
        itemWidth: 200
    },

    tooltip: {
        headerFormat: '<b>{point.x}</b><br>',
        shared: true,
        crosshairs: true,
        valueSuffix: '%',
        valueDecimals: 2
    },

    series: [{
        name: 'Rate with disablities',
        lineWidth: 3,
        color: '#728F89',
        marker: {
            enabled: true,
            symbol: 'diamond',
            radius: 3,
            fillColor: '#D84226'
        },
        data: [7.8, 7.8, 8.3, 18.9, 17.9, 16.5, 14.3, 13.2, 12.5, 11.1, 12.3, 11.0, 12.0, 12.6, 10.2, 9.6, 10.2, 10.9]
    }, {
        name: 'Rate without disabilities',
        lineWidth: 3,
        visible: true,
        color: '#8E8B7E',
        marker: {
            enabled: true,
            symbol: 'triangle',
            radius: 3,
            fillColor: '#D84226'
        },
        data: [3.8, 3.6, 4.4, 14.3, 12.8, 11.0, 10.3, 8.4, 7.5, 6.4, 6.2, 6.3, 6.6, 6.3, 6.0, 5.6, 5.3, 5.9]
    }]
});
