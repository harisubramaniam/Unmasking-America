var lines = Highcharts.geojson(Highcharts.maps['countries/us/us-wi-all'], 'mapline'),
   mapData = Highcharts.maps['countries/us/us-wi-all'];

// Setup common params
Highcharts.setOptions({  
    chart: {
        sytle: {
            fontFamily: 'Montserrat'
        },
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    subtitle: {
        text: null
    }
})

Highcharts.getJSON('https://code.highcharts.com/mapdata/countries/us/us-wi-all.geo.json', function (geojson) {
    Highcharts.mapChart('container', {
        chart: {
            map: geojson,
            events: {
                load: function() {
                    var chart = $('#container').highcharts(),
                    nameOfCounties = ['Milwaukee'];
        
                    chart.series[0].data.forEach(function(element){
                        if ($.inArray(element.name, nameOfCounties) !== -1) {
                            element.update({
                                borderColor: 'rgba(158, 37, 49, .75)',
                                borderWidth: 2,
                            });
                        }
                    });
                },
                backgroundColor: '#EFEFEF'
            }
        },
        title: {
            text: 'Milwaukee County, Wisconsin'
        },
        mapNavigation: {
            enabled: false,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        tooltip: {
            useHTML: true,
            formatter: function() {
                return '<strong>'+ this.point.school + '</strong><br/>' + this.point.public_private + '&nbsp;' + this.point.school_type + '<br/>Charter School: <strong>' + this.point.charter_school + '</strong>';
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            mapData: mapData,
            name: 'Milwuakee County',
            borderColor: 'green',
            borderWidth: 2,
            states: {
                hover: {
                    color: '#A4EDBA'
                }
            },
            dataLables: {
                enabled: false
            }
        }]
    });
    // Add series with our data
    $.getJSON("data/milwaukee_county.json", function (json) {
        var data = [];
        $.each(json, function(ix, entry) {
            entry.z = entry.private_public;
            data.push(entry);
        });
        chart = $('#container').highcharts();
        chart.addSeries({
            type: 'mappoint',
            dataLabels: {
                enabled: true
            },
            name: 'Schools',
            data: data,
            showInLegend: false,
            marker: {
                symbol: 'triangle',
                radius: 3
            },
            color: 'rgba(37, 64, 111, .9)'
        });
    })
});