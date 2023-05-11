Highcharts.chart('areachart', {
    title: {
        text: 'Hockey VS Cricket',
    },
    yAxis: {
        title: {
            text: 'Number of Players'
        }
    },
    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2014'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },
    series: [{
        name: 'Hockey',
        data: [27387, 29459, 31056, 31982, 50010]
    }, {
        name: 'Cricket',
        data: [37387, 29459, 11056, 51982, 40009]
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 10
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
});

Highcharts.chart('pichart', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Food brands market share'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Nestle',
            y: 65,
        }, {
            name: 'Parle',
            y: 15
        }, {
            name: 'Britannia',
            y: 10
        }, {
            name: 'ITC',
            y: 4
        }, {
            name: 'Hindustan Unilever',
            y: 4
        },
        {
            name: 'Other',
            y: 2
        }]
    }]
});