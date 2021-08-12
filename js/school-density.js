$(function() {
var wilines = Highcharts.geojson(Highcharts.maps['countries/us/us-wi-all'], 'mapline'),
   wimapData = Highcharts.maps['countries/us/us-wi-all'];

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

// Milwakee County, WI
Highcharts.getJSON('https://code.highcharts.com/mapdata/countries/us/us-wi-all.geo.json', function (geojson) {
    Highcharts.mapChart('container1', {
        chart: {
            map: geojson,
            events: {
                load: function() {                    
                    this.mapZoom(.001, 7425, -130);
                    var chart = $('#container1').highcharts(),
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
            mapData: wimapData,
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
    // const pos = chart1.fromLatLonToPoint({ lat: 42.9544868, lon: -87.91351318});
    // console.log('pos value: '+ pos.x + ', ' + pos.y);
    // Add series with our data
    $.getJSON("data/milwaukee_county.json", function (json) {
        var data = [];
        $.each(json, function(ix, entry) {
            entry.z = entry.private_public;
            data.push(entry);
        });
        chart = $('#container1').highcharts();
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

// Washington County, ME
var melines = Highcharts.geojson(Highcharts.maps['countries/us/us-me-all'], 'mapline'),
   memapData = Highcharts.maps['countries/us/us-me-all'];

Highcharts.getJSON('https://code.highcharts.com/mapdata/countries/us/us-me-all.geo.json', function (geojson) {
    const chart1 = Highcharts.mapChart('container2', {
        chart: {
            map: geojson,
            events: {
                load: function() {
                    this.mapZoom(0.3, 5315, -3915); // Zoom map to county
                    var chart = $('#container2').highcharts(),
                    nameOfCounties = ['Washington'];
        
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
            text: 'Washington County, Maine'
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
                return '<strong>'+ this.point.school + '</strong><br/>' + this.point.private_public + '&nbsp;' + this.point.school_type;
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            mapData: memapData,
            name: 'Washington County',
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
    const pos = chart1.fromLatLonToPoint({ lat: 45.0711075, lon: -67.49041});
    console.log('pos value: '+ pos.x + ', ' + pos.y);
    // Add series with our data
    $.getJSON("data/washington_county.json", function (json) {
        var data = [];
        $.each(json, function(ix, entry) {
            entry.z = entry.private_public;
            data.push(entry);
        });
        chart = $('#container2').highcharts();
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


});