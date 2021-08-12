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
        type: 'bar'
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
        categories: ['1 person', '2 people', '3 people', '4 people', '5 people', '6 people', '7 people', '8 people'],
        title: {
            text: null
        }
    },

    yAxis: {
        min: 100,
        title: {
            text: null
        }

    },

    tooltip: {
        valueSuffix: ' '
    },

    legend: {
        reversed: true,
        align: 'center',
        x: 0,
        borderWidth: 0,
        layout: 'horizontal',
        verticalAlign: 'top',
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        shadow: false,
        symbolRadius: 0
    },

    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false,
                color: (Highcharts.theme && Highcharts.dataLabelsColor) || 'white',
                style: {
                    textShadow: '0 0 3px black'
                }
            }
        }

    },

    series: [{
        name: 'Monthly allotment before COVID-19',
        color: '#353F40',
        data: [204, 374, 535, 680, 807, 969, 1071, 1224],
        pointPadding: 0,
        groupPadding: .1,
        borderWidth: 1
    }, {
        name: 'With 15% boost',
        color: '#A1C2C2',
        data: [234, 430, 616, 782, 929, 1114, 1232, 1408],
        pointPadding: 0,
        groupPadding: .1,
        borderWidth: 1
    }]
})