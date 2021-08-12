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

Highcharts.chart('container', {
    chart: {
        backgroundColor: '#FFFFFF',
        type: 'column'
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
        categories: ['Native Born', 'Foreign Born'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total Employed'
        },
        stackLabels: {
            enabled: false,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.defaultOptions.title.style && Highcharts.defaultOptions.title.style.color) || 'gray'
            }
    
        }
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}:&nbsp;<b>{point.y}%</b><br/>Total Foreign-born Employed [All sectors]:&nbsp;<b>24,809</b><br/>Total Native-born Employed [All sectors]:&nbsp;<b>122,986</b>'

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
                enabled: false
            }
        }
    },
    series: [{
        name: 'Management',
        color: '#728F89',
        data: [44.4, 36.3],
        pointPadding: 0,
        groupPadding: .1,
        borderWidth: 1
    }, {
        name: 'Service',
        color: '#8E8B7E',
        data: [14.4, 20.6],
        pointPadding: 0,
        groupPadding: .1,
        borderWidth: 1
    }, {
        name: 'Maintenance',
        color: '#14262E',
        data: [8.1, 13.6],
        pointPadding: 0,
        groupPadding: .1,
        borderWidth: 1
    }, {
        name: 'Production',
        color: '#E60000',
        data: [11.7, 15.2],
        pointPadding: 0,
        groupPadding: .1,
        borderWidth: 1
    }]
})