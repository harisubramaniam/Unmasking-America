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
        categories: ['Nov. 2019', 'Dec. 2019', 'Jan. 2020', 'Feb. 2020', 'March 2020', 'Apr. 2020', 'May 2020', 'June 2020', 'July 2020', 'Aug. 2020', 'Sept. 2020', 'Oct. 2020', 'Nov. 2020', 'Dec. 2020']
    },

    yAxis: {
        min: 600000,
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
        name: 'Number of child care workers',
        color: '#728F89',
        data: [1031100, 1034000, 1036800, 1038600, 1003400, 668000, 699500, 782400, 828400, 835300, 856100, 863600, 863300, 867200]

    }]
})