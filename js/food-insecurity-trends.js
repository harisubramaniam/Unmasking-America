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
            fontFamily: 'Avenir Next'
        },
        // spacingLeft: 0
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
    chart: {
        backgroundColor: '#FFFFFF',
        type: 'line'
    },

    title: {
        text: null
    },

    subtitle: {
        text: null
    },

    legend: {
        enabled: false
    },

    xAxis: {
        title: {
            text: ''
        },
        categories: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        plotLines: [{
            value: 0,
            label: {
                useHTML: true,
                text: '<strong>Great Recession</strong>',
                verticalAlign: 'top',
                textAlign: 'center',
                rotation: 360,
                x: 45,
                y: 10
            },
            width: 1,
            dashStyle: 'dash',
            color: '#EA3749'
        }, {
            value: 11,
            label: {
                useHTML: true,
                text: '<strong>Projection</strong>',
                verticalAlign: 'top',
                textAlign: 'center',
                rotation: 360,
                x: -45,
                y: 10
            },
            width: 1,
            dashStyle: 'dash',
            color: '#EA3749'
        }, {
            value: 12,
            label: {
                useHTML: true,
                text: null,
                verticalAlign: 'top',
                textAlign: 'center',
                rotation: 360,
                x: -43,
                y: 10
            },
            width: 1,
            dashStyle: 'dash',
            color: '#EA3749'           
        }]
    },

    yAxis: {
        title: {
            text: 'Insecurity Rate'
        },
        min: 0, 
    
        plotLines: [{
            value: 0,
            width: 1,
            color: '#ABAAA7'
        }]
    },

    tooltip: {
        // headerFormat: '<b>Age Group - {point.x}</b><br>',
        // pointFormat: '{series.name}: <b>{point.y}%</b>',
        // valueSuffix: '',
        // valueDecimals: 3
        formatter: function (){
            return '<b>' + this.x + '</b><br />\u25CF Insecurity Rate: <b>' + this.y + '%</b><br />';
        }
    },

    plotOptions: {
        spline: {
            marker: {
                enabled: true
            }
        },
        series: {
            animation: {
                duration: 3000
            },
            events: {
                legendItemClick: function() {
                    return false;
                }
            }
        }
    },

    series: [{
        name: 'Offender % of population',
        color: '#232947',
        lineWidth: 3.5,
        marker: {
            symbol: 'circle',
            radius: 3
        },
        // data: [0.044,1.124,3.404,3.499,3.308,2.89,2.388,1.634,1.273,0.893,0.657,0.297,0.103]
        data: [
            {
                y: 14.8,
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 15.7,
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 15.80,
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 15.20,
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 15.00,
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 14.60,
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 13.70,
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 13.00,
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 12.60,
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 12.20,
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 11.70,
                marker: {
                    symbol: 'diamond',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 14.00,
                marker: {
                    symbol: 'circle',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }, {
                y: 15.00,
                marker: {
                    symbol: 'circle',
                    radius: 3,
                    fillColor: '#D84226'
                }
            }
        ],
        zoneAxis: 'x',
        zones: [{
            value : 11
        }, {
            dashStyle: 'dot'
        }]
    }]
});