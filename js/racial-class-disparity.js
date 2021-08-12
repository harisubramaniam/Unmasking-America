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
    exporting: {
        enabled: false
    }
});

$('#container1').highcharts({
    chart: {
        backgroundColor: '#FFFFFF',
        type: 'bar',
        marginLeft: 130
    },
    title: {
        text: '% of Black,  Hispanic, Asian and white individuals who said...',
        sytle: {
            fontWeight: '700',
            fontSize: '1.25em'
        }
    },
    subtitle: {
        text: null
    },
    credits: {
        text: 'SOURCE: U.S. Census Bureau, Household Pulse Survey',
        href: 'https://www.census.gov/programs-surveys/household-pulse-survey.html'
    },
    legend: {

    },
    xAxis: {
        categories: ['they had difficultly <br />paying for usual <br />household expenses', 'they lost work <br />due to the pandemic', 'they sometimes or <br />often did not have <br />enough to eat', 'they were behind <br />on housing <br />payments'],
        crosshair: true,
        labels: {
            overlap: true,
        }
    },
    yAxis: {
        title: {
            text: 'Percent (%)'
        },
        min: 0,
        // max: 100,
        plotLines: [{
            value: 0,
            width: 1,
            color: '#ABAAA7'
        }]
    },
    tooltip: {
        pointFormat: '<table><tr><td style="color:{series.color}; padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.2f}%</b></td></tr></table'
    },
    plotOptions: {
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
        name: 'Hispanic',
        color: '#8E8B7E',
        data: [50.9243857667525, 11.7168156998779, 20.7698604366664, 14.3167652777869]
    }, {
        name: 'Black',
        color: '#14262E',
        data: [51.3184581847861, 12.934535986202, 19.2350825121962, 18.8869847162247]
    }, {
        name: 'Asian',
        color: '#E60000',
        data: [33.0215066366284, 9.20062499967555, 5.09797433491067, 6.82270724309697]
    }, {
        name: 'White',
        color: '#728F89',
        data: [27.5700504272948, 6.41442958876229, 7.78373782298313, 5.57458009961374]
    }]
});

// Income levels
$('#container2').highcharts({
    chart: {
        backgroundColor: '#FFFFFF',
        type: 'bar',
        marginLeft: 130
    },
    title: {
        text: '% of people in each income bracket who said ...',
        sytle: {
            fontWeight: '700',
            fontSize: '1.25em'
        }
    },
    subtitle: {
        text: null
    },
    credits: {
        text: 'SOURCE: U.S. Census Bureau, Household Pulse Survey',
        href: 'https://www.census.gov/programs-surveys/household-pulse-survey.html'
    },
    legend: {
        itemWidth: 200
    },
    xAxis: {
        title: {
            text: ''
        },
        categories: ['they had difficultly <br />paying for usual <br />household expenses', 'they lost work <br />due to the pandemic', 'they sometimes or <br />often did not have <br />enough to eat', 'they were behind <br />on housing <br />payments'],
        crosshair: true
    },
    yAxis: {
        title: {
            text: 'Percent (%)'
        },
        min: 0, 
    
        plotLines: [{
            value: 0,
            width: 1,
            color: '#ABAAA7'
        }]
    },
    tooltip: {
        pointFormat: '<table><tr><td style="color:{series.color}; padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.2f}%</b></td></tr></table'
    },
    plotOptions: {
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
        name: '< $34,999',
        color: '#14262E',
        data: [59.0084421899667, 12.7750825041385, 24.9727817857839, 19.4582535198785]
    }, {
        name: '$35,000 - $74,999',
        color: '#728F89',
        data: [37.7258594808997, 7.99562989333884, 11.1313766723535, 8.85517147988113]
    }, {
        name: '$75,000 - $149,999',
        color: '#8E8B7E',
        data: [21.111350773578, 5.1481171464734, 3.38034198059469, 4.00225841057602]
    }, {
        name: '$150,000 and above',
        color: '#E60000',
        data: [9.68458955836083, 4.39961405515023, 1.03983269232472, 1.27732699647269]
    }]
});