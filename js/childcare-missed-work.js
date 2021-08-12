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
        type: 'column',
        style: {
            fontFamily: 'Montserrat'
        },
    },
    lang: {
        thousandsSep: ','
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    legend: {
        enabled: false
    }
});

Highcharts.chart('container', {
    // chart: {
    //     type: 'column'
    // },

    xAxis: {
        categories: ['Sept. 2019', 'Oct. 2019', 'Nov. 2019', 'Dec. 2019', 'Jan. 2020', 'Feb. 2020', 'March 2020', 'Apr. 2020', 'May 2020', 'June 2020', 'July 2020', 'Aug. 2020', 'Sept. 2020', 'Oct. 2020', 'Nov. 2020']
    },

    yAxis: {
        min: 10000,
        title: {
            text: 'Estimated number of workers (in thousands)'
        }
    },

    tooltip: {
        headerFormat: '<b>{point.key}</b><br/>',
        pointFormat: '{series.name}:&nbsp;<b>{point.y:,.0f}</b>',
        useHTML: true

    },

    plotOptions: {
        column: {
            groupPadding: 0,
            pointPadding: 0.1,
            borderWidth: 0
        }

    },
    
    series: [{
        name: 'Estimated number of workers who missed one day of work',
        color: '#728F89',
        data: [29579, 24428, 36328, 12374, 30305, 23575, 47481, 81422, 83294, 83778, 74289, 69293, 62451, 93920, 64179]

    }]
})