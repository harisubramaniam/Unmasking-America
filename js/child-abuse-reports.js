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
        type: 'line'
    },
    title: {
        text: 'Arizona',
        sytle: {
            fontWeight: '700',
            fontSize: '1.25em'
        }
    },
    subtitle: {
        text: 'Number of reports of abuse and neglect',
        style: {
            fontWeight: '500',
            fontSize: '1em'
        }
    },
    credits: {
        text: 'SOURCE: Arizona Department of Child Safety',
        href: 'javascript:window.open("https://dcs.az.gov/", "_blank")'
    },
    legend: {
        enabled: false
    },
    xAxis: {
        title: {
            text: ''
        },
        categories: ['2016', '2017', '2018', '2019', '2020']
    },
    yAxis: {
        title: {
            text: null
        },
        min: 40000, 
    
        plotLines: [{
            value: 0,
            width: 1,
            color: '#ABAAA7'
        }]
    },
    tooltip: {
        formatter: function (){
            return '<b>' + this.x + '</b><br />\u25CF Number of reports of abuse and neglect: <b>' + Highcharts.numberFormat(this.y, 0, ',') + '</b><br />';
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
        name: 'Arizona Data',
        color: '#232947',
        lineWidth: 3.5,
        marker: {
            symbol: 'circle',
            radius: 3
        },
        data: [{
            y: 49134,
            marker: {
                symbol: 'diamond',
                radius: 3,
                fillColor: '#D84226'
            }
        }, {
            y: 47981,
            marker: {
                symbol: 'diamond',
                radius: 3,
                fillColor: '#D84226'
            }
        }, {
            y: 48021,
            marker: {
                symbol: 'diamond',
                radius: 3,
                fillColor: '#D84226'
            }
        }, {
            y: 47000,
            marker: {
                symbol: 'diamond',
                radius: 3,
                fillColor: '#D84226'
            }
        }, {
            y: 45142,
            marker: {
                symbol: 'diamond',
                radius: 3,
                fillColor: '#D84226'
            }
        }]
    }]
});

// Missouri Data
$('#container2').highcharts({
    chart: {
        backgroundColor: '#FFFFFF',
        type: 'line'
    },
    title: {
        text: 'Missouri',
        sytle: {
            fontWeight: '700',
            fontSize: '1.25em'
        }
    },
    subtitle: {
        text: 'Number of calls to the child abuse/neglect hotline',
        style: {
            fontWeight: '500',
            fontSize: '1em'
        }
    },
    credits: {
        text: 'SOURCE: Missouri Department of Social Services',
        href: 'javascript:window.open("https://dss.mo.gov/re/pdf/can/2020-can-annual-report.pdf", "_blank")'
    },
    legend: {
        enabled: false
    },
    xAxis: {
        title: {
            text: ''
        },
        categories: ['2016', '2017', '2018', '2019', '2020']
    },
    yAxis: {
        title: {
            text: null
        },
        min: 50000, 
    
        plotLines: [{
            value: 0,
            width: 1,
            color: '#ABAAA7'
        }]
    },
    tooltip: {
        formatter: function (){
            return '<b>' + this.x + '</b><br />\u25CF Number of calls to the child abuse/neglect hotline: <b>' + Highcharts.numberFormat(this.y, 0, ',') + '</b><br />';
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
        name: 'Missouri Data',
        color: '#232947',
        lineWidth: 3.5,
        marker: {
            symbol: 'square',
            radius: 3
        },
        data: [{
            y: 72388,
            marker: {
                symbol: 'square',
                radius: 3,
                fillColor: '#D84226'
            }
        }, {
            y: 68014,
            marker: {
                symbol: 'square',
                radius: 3,
                fillColor: '#D84226'
            }
        }, {
            y: 73924,
            marker: {
                symbol: 'square',
                radius: 3,
                fillColor: '#D84226'
            }
        }, {
            y: 64920,
            marker: {
                symbol: 'square',
                radius: 3,
                fillColor: '#D84226'
            }
        }, {
            y: 55853,
            marker: {
                symbol: 'square',
                radius: 3,
                fillColor: '#D84226'
            }
        }]
    }]
});
// California data
$('#container3').highcharts({
    chart: {
        backgroundColor: '#FFFFFF',
        type: 'line'
    },
    title: {
        text: 'California',
        sytle: {
            fontWeight: '700',
            fontSize: '1.25em'
        }
    },
    subtitle: {
        text: 'Children with Child Maltreatment Allegations',
        style: {
            fontWeight: '500',
            fontSize: '1em'
        }
    },
    credits: {
        text: 'SOURCE: California Child Welfare Indicators Project',
        href: 'javascript:window.open("https://ccwip.berkeley.edu/childwelfare/reports/AllegationRates/MTSG/r/rts/s", "_blank")'
    },
    legend: {
        enabled: false
    },
    xAxis: {
        title: {
            text: ''
        },
        categories: ['2016', '2017', '2018', '2019', '2020']
    },
    yAxis: {
        title: {
            text: null
        },
        min: 350000, 
    
        plotLines: [{
            value: 0,
            width: 1,
            color: '#ABAAA7'
        }]
    },
    tooltip: {
        formatter: function (){
            return '<b>' + this.x + '</b><br />\u25CF Children with Child Maltreatment Allegations: <b>' + Highcharts.numberFormat(this.y, 0, ',') + '</b><br />';
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
        name: 'California Data',
        color: '#232947',
        lineWidth: 3.5,
        marker: {
            symbol: 'triangle',
            radius: 3
        },
        data: [{
            y: 494880,
            marker: {
                symbol: 'triangle',
                radius: 3,
                fillColor: '#D84226'
            }
        }, {
            y: 499292,
            marker: {
                symbol: 'triangle',
                radius: 3,
                fillColor: '#D84226'
            }
        }, {
            y: 487052,
            marker: {
                symbol: 'triangle',
                radius: 3,
                fillColor: '#D84226'
            }
        }, {
            y: 477880,
            marker: {
                symbol: 'triangle',
                radius: 3,
                fillColor: '#D84226'
            }
        }, {
            y: 391579,
            marker: {
                symbol: 'triangle',
                radius: 3,
                fillColor: '#D84226'
            }
        }]
    }]
});
// Florida data
$('#container4').highcharts({
    chart: {
        backgroundColor: '#FFFFFF',
        type: 'line'
    },
    title: {
        text: 'Florida',
        sytle: {
            fontWeight: '700',
            fontSize: '1.25em'
        }
    },
    subtitle: {
        text: 'Number of reports of maltreatment',
        style: {
            fontWeight: '500',
            fontSize: '1em'
        }
    },
    credits: {
        text: 'SOURCE: Florida Department of Children and Families',
        href: 'javascript:window.open("https://www.myflfamilies.com/programs/childwelfare/dashboard/alleged-maltreatments.shtml/", "_blank")'
    },
    legend: {
        enabled: false
    },
    xAxis: {
        title: {
            text: ''
        },
        categories: ['2016', '2017', '2018', '2019', '2020']
    },
    yAxis: {
        title: {
            text: null
        },
        min: 325000, 
    
        plotLines: [{
            value: 0,
            width: 1,
            color: '#ABAAA7'
        }]
    },
    tooltip: {
        formatter: function (){
            return '<b>' + this.x + '</b><br />\u25CF Number of reports of maltreatment: <b>' + Highcharts.numberFormat(this.y, 0, ',') + '</b><br />';
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
        name: 'Florida Data',
        color: '#232947',
        lineWidth: 3.5,
        marker: {
            symbol: 'circle',
            radius: 3
        },
        data: [{
            y: 517610,
            marker: {
                symbol: 'circle',
                radius: 3,
                fillColor: '#D84226'
            }
        }, {
            y: 484286,
            marker: {
                symbol: 'circle',
                radius: 3,
                fillColor: '#D84226'
            }
        }, {
            y: 442423,
            marker: {
                symbol: 'circle',
                radius: 3,
                fillColor: '#D84226'
            }
        }, {
            y: 400142,
            marker: {
                symbol: 'circle',
                radius: 3,
                fillColor: '#D84226'
            }
        }, {
            y: 348284,
            marker: {
                symbol: 'circle',
                radius: 3,
                fillColor: '#D84226'
            }
        }]
    }]
});