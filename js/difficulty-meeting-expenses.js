$(function() {
    // Setup common map params
    Highcharts.setOptions({
      chart: {
        style: {
          fontFamily: 'Avenir Next'
        }
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      }
    });
  
    // Default load params
    $.getJSON("data/difficulty-meeting-expenses.json", function(dataset1) {
        // Initiate the chart
        Highcharts.mapChart('container', {
            legend: {
                enabled: false
            },
            chart: {
                backgroundColor: '#FFFFFF'
            },
            title : {
                text : 'Difficulty Paying For Usual Household Expenses',
                verticalAlign: 'top',
                margin: 0
            },
            subtitle: {
                text: '1 in 4 adults in the U.S. said it was somewhat or very difficult to pay for usual household expenses, including rent, utilities, food, car payments and student loans.',
                floating: true,
                align: 'center',
                useHTML: true,
                style: {"right":"1px"}
            },
            mapNavigation: {
                enabled: false,
                buttonOptions: {
                verticalAlign: 'bottom'
                }
            },
            tooltip: {
                enabled: true,
                useHTML: true,
                headerFormat: '',
                pointFormat: '<b>{point.name}</b> <br />Difficulty Paying for Usual Household Expenses: <b>{point.value}%</b>&nbsp;(+/-{point.data-point}%)'
            },
            colorAxis: {
                dataClasses: [{
                    from: 0,
                    to: 0,
                    color: '#FFFFFF'
                }, {
                    from: 1,
                    to: 15,
                    color: 'rgba(114, 143, 137, .1)'
                }, {
                    from: 15.1,
                    to: 20,
                    color: 'rgba(114, 143, 137, .2)'
                }, {
                    from: 20.1,
                    to: 27,
                    color: 'rgba(114, 143, 137, .3)'
                }, {
                    from: 27.1,
                    to: 32,
                    color: 'rgba(114, 143, 137, .4)'
                }, {
                    from: 32.1,
                    to: 37,
                    color: 'rgba(114, 143, 137, .7)'
                }, {
                    from: 37.1,
                    to: 45,
                    color: 'rgba(114, 143, 137, .9)'
                }]
            },
            series : [{
                data : dataset1,
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: 'hc-key',
                name: 'difficulty meeting expenses',
                states: {
                    hover: {
                        color: '#9E2531'
                    }
                },
                dataLabels: {
                    enabled: false
                }
            }, {
                name: 'Separators',
                type: 'mapline',
                data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
                color: 'silver',
                showInLegend: false,
                enableMouseTracking: false
            }]
        });
    });

    // Button 1 clicked
    $('#map1').click(function() { 
        $.getJSON("data/difficulty-meeting-expenses.json", function(dataset1) {
            // Initiate the chart
            Highcharts.mapChart('container', {
                legend: {
                    enabled: false
                },
                chart: {
                    backgroundColor: '#FFFFFF'
                },
                title : {
                    text : 'Difficulty Paying For Usual Household Expenses',
                    verticalAlign: 'top',
                    margin: 0
                },
                subtitle: {
                    text: '1 in 4 adults in the U.S. said it was somewhat or very difficult to pay for usual household expenses, including rent, utilities, food, car payments and student loans.'

                },
                mapNavigation: {
                    enabled: false,
                    buttonOptions: {
                        verticalAlign: 'bottom'
                    }
                },
                tooltip: {
                    enabled: true,
                    useHTML: true,
                    headerFormat: '',
                    pointFormat: '<b>{point.name}</b> <br />Difficulty Paying for Usual Household Expenses: <b>{point.value}%</b>&nbsp;(+/-{point.data-point}%)'
                },
                colorAxis: {
                    dataClasses: [{
                        from: 0,
                        to: 0,
                        color: '#FFFFFF'
                    }, {
                        from: 1,
                        to: 15,
                        color: 'rgba(114, 143, 137, .1)'
                    }, {
                        from: 15.1,
                        to: 20,
                        color: 'rgba(114, 143, 137, .2)'
                    }, {
                        from: 20.1,
                        to: 27,
                        color: 'rgba(114, 143, 137, .3)'
                    }, {
                        from: 27.1,
                        to: 32,
                        color: 'rgba(114, 143, 137, .4)'
                    }, {
                        from: 32.1,
                        to: 37,
                        color: 'rgba(114, 143, 137, .7)'
                    }, {
                        from: 37.1,
                        to: 45,
                        color: 'rgba(114, 143, 137, .9)'
                    }]
                },
                series: [{
                    data : dataset1,
                    mapData: Highcharts.maps['countries/us/us-all'],
                    joinBy: 'hc-key',
                    name: 'difficulty meeting expenses',
                    states: {
                        hover: {
                            color: '#9E2531'
                        }
                    },
                    dataLabels: {
                        enabled: false,
                    }
                }, {
                    name: 'Separators',
                    type: 'mapline',
                    data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
                    color: 'silver',
                    showInLegend: false,
                    enableMouseTracking: false
                }]
            });
        });
    });

    // Button 2 clicked
    $('#map2').click(function() {
        $.getJSON("data/housing-insecurity.json", function(dataset2) {
            // Initiate the chart
            Highcharts.mapChart('container', {
                legend: {
                    enabled: false
                },
                chart: {
                    backgroundColor: '#FFFFFF'
                },
                title : {
                    text : 'Housing Insecurity',
                    verticalAlign: 'top',
                    margin: 0
                },
                subtitle: {
                    text: '6% of adults said they were behind on their housing payments and had little to no confidence in their ability to pay next month\'s rent or mortgage.'
                },
                mapNavigation: {
                    enabled: false,
                    buttonOptions: {
                        verticalAlign: 'bottom'
                    }
                },
                tooltip: {
                    enabled: true,
                    useHTML: true,
                    headerFormat: '',
                    pointFormat: '<b>{point.name}</b> <br />Difficulty Paying for housing: <b>{point.value}%</b>&nbsp;(+/-{point.data-point}%)'
                },
                colorAxis: {
                    dataClasses: [{
                        from: 0,
                        to: 0,
                        color: '#FFFFFF'
                    }, {
                        from: 1,
                        to: 3,
                        color: 'rgba(114, 143, 137, .1)'
                    }, {
                        from: 3.1,
                        to: 6,
                        color: 'rgba(114, 143, 137, .2)'
                    }, {
                        from: 6.1,
                        to: 8,
                        color: 'rgba(114, 143, 137, .3)'
                    }, {
                        from: 8.1,
                        to: 9,
                        color: 'rgba(114, 143, 137, .4)'
                    }, {
                        from: 9.1,
                        to: 12,
                        color: 'rgba(114, 143, 137, .7)'
                    }, {
                        from: 12.1,
                        to: 15,
                        color: 'rgba(114, 143, 137, .9)'
                    }]
                },
                series : [{
                    data : dataset2,
                    mapData: Highcharts.maps['countries/us/us-all'],
                    joinBy: 'hc-key',
                    name: 'housing insecurity',
                    states: {
                        hover: {
                        color: '#9E2531'
                        }
                    },
                    dataLabels: {
                        enabled: false,
                        format: '{point.name}'
                    }
                }, {
                    name: 'Separators',
                    type: 'mapline',
                    data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
                    color: 'silver',
                    showInLegend: false,
                    enableMouseTracking: false
                }]
            });
        });
    });

    // Button 3 clicked
    $('#map3').click(function() {
        $.getJSON("data/food-scarcity.json", function(dataset3) {
            // Initiate the chart
            Highcharts.mapChart('container', {
                legend: {
                    enabled: false
                },
                chart: {
                    backgroundColor: '#FFFFFF'
                },
                title : {
                    text : 'Food Scarcity',
                    verticalAlign: 'top',
                    margin: 0
                },
                subtitle: {
                    text: 'Nearly 1 in 10 adults said their households sometimes or often did not have enough food to eat in the last seven days.'
                },
                mapNavigation: {
                    enabled: false,
                    buttonOptions: {
                        verticalAlign: 'bottom'
                    }
                },
                tooltip: {
                    enabled: true,
                    useHTML: true,
                    headerFormat: '',
                    pointFormat: '<b>{point.name}</b> <br />Households not having enough food: <b>{point.value}%</b>&nbsp;(+/-{point.data-point}%)'
                },
                colorAxis: {
                    dataClasses: [{
                        from: 0,
                        to: 0,
                        color: '#FFFFFF'
                    }, {
                        from: 1,
                        to: 4,
                        color: 'rgba(114, 143, 137, .1)'
                    }, {
                        from: 4.1,
                        to: 8,
                        color: 'rgba(114, 143, 137, .2)'
                    }, {
                        from: 8.1,
                        to: 10,
                        color: 'rgba(114, 143, 137, .3)'
                    }, {
                        from: 10.1,
                        to: 12,
                        color: 'rgba(114, 143, 137, .4)'
                    }, {
                        from: 12.1,
                        to: 15.8,
                        color: 'rgba(114, 143, 137, .7)'
                    }, {
                        from: 15.9,
                        to: 18,
                        color: 'rgba(114, 143, 137, .9)'
                    }]
                },
                series : [{
                    data : dataset3,
                    mapData: Highcharts.maps['countries/us/us-all'],
                    joinBy: 'hc-key',
                    name: 'food scarcity',
                    states: {
                        hover: {
                        color: '#9E2531'
                        }
                    },
                    dataLabels: {
                        enabled: false,
                    }
                }, {
                    name: 'Separators',
                    type: 'mapline',
                    data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
                    color: 'silver',
                    showInLegend: false,
                    enableMouseTracking: false
                }]
            });
        });
    });
});