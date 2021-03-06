//ActualChart
$(document).ready(function () {
    var Actual = document.getElementById("ActualChart");
    var ActualChart = echarts.init(Actual);
    var app = {};
    option = {
        title: {
            text: 'Labor Hours',
            left: 'center',
            top: 8,
            textStyle: {
                fontSize: 15,
                fontWeight: "normal"
            },
        },
        legend: {
            orient: "horizontal",
            center: '',
            top: 30,
            textStyle: {
                fontSize: 10
            },
            data: ['Estimated Hours', 'Actual Hours']
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            containLabel: false
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        yAxis: {
            type: '',
            show: false,
        },
        series: [
            {
                name: 'Estimated Hours',
                type: 'line',
                symbol: "circle",
                symbolSize: 2,
                lineStyle: {
                    color: "#c23531",
                    width: 3,
                    type: "dashed",
                },
                itemStyle: {
                    borderWidth: 4,
                    borderColor: "#c23531",
                    color: "#c23531",
                },
                stack: '',
                data: [120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 180, 100]
            },
            {
                name: 'Actual Hours',
                type: 'line',
                symbol: "circle",
                symbolSize: 2,
                lineStyle: {
                    color: "#165184",
                    width: 3,
                    type: "dashed",
                },
                itemStyle: {
                    borderWidth: 4,
                    borderColor: "#165184",
                    color: "#165184",
                },
                stack: '',
                data: [45,56 , 77, 44 , 110, 140, 100, 210, 300, 140, 110]
            },
        ]
    };
    if (option && typeof option === "object") {
        ActualChart.setOption(option, true);
    }
    $(window).resize();
    $(window).on('resize', resize);
    function resize () {
        setTimeout(function () {
            ActualChart.resize();
        }, 0);
    };
});
//pieChart
$(document).ready(function () {
    var pie = document.getElementById("pieChart");
    var pieChart = echarts.init(pie);
    var app = {};
    option = {
        title: {
            text: 'Technician Type Hrs',
            left: 'left',
            top: 0,
            textStyle: {
                fontSize: 13,
                fontWeight: "normal"
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 10,
            top: 35,
            textStyle: {
                fontSize: 10
            },
            icon: "circle",
            data: ['Supervisor Technition', 'Senior Technition', 'Jenior Technition', 'Senior', 'Jenior']
        },
        series: [
            {
                name: 'Technician Type',
                type: 'pie',
                radius: ['60%', '90%'],
                label: {
                    show: true,
                    position: 'outside',
                    formatter: ' {c} ({d}%)',
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '11',
                        position: 'outside',
                    },
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                labelLine: {
                    length: 5,
                },
                data: [
                    { value: 335, name: 'Supervisor Technition'},
                    { value: 310, name: 'Senior Technition'},
                    { value: 234, name: 'Jenior Technition'},
                    { value: 435, name: 'Senior'},
                    { value: 548, name: 'Jenior'}
                ],
                avoidLabelOverlap: true,
            }
        ]
    };

    function genData (count) {
        var nameList = [
            '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???', '???'
        ];
        var legendData = [];
        var seriesData = [];
        var selected = {};
        for (var i = 0; i < count; i++) {
            name = Math.random() > 0.65
                ? makeWord(4, 1) + '??' + makeWord(3, 0)
                : makeWord(2, 1);
            legendData.push(name);
            seriesData.push({
                name: name,
                value: Math.round(Math.random() * 100000)
            });
            selected[name] = i < 6;
        }

        return {
            legendData: legendData,
            seriesData: seriesData,
            selected: selected
        };

        function makeWord (max, min) {
            var nameLen = Math.ceil(Math.random() * max + min);
            var name = [];
            for (var i = 0; i < nameLen; i++) {
                name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
            }
            return name.join('');
        }
    }

    if (option && typeof option === "object") {
        pieChart.setOption(option, true);
    }
    $(window).resize();
    $(window).on('resize', resize);
    function resize () {
        setTimeout(function () {
            pieChart.resize();
        }, 0);
    };

});
// Mean Time Between Failure chart
$(document).ready(function () {
    $(window).resize();
    var Gauge = document.getElementById("TimeChart");
    var GaugeChart = echarts.init(Gauge);
    var app = {};
    option = {
        responsive: true,
        maintainAspectRatio: false,

        tooltip: {
            formatter: '{a} <br/>{b} : {c}'
        },
        toolbox: {
            show: false
        },
        grid: {},
        series: [
            {
                name: 'MTBF',
                type: 'gauge',
                detail: {
                    formatter: '{value} Hrs',
                    show: true,
                    offsetCenter: [0, 36],
                    fontSize: 15,
                },
                data: [{ value: 50, name: '' }],
                title: {
                    show: false
                },
                radius: "98%"
            }
        ]
    };
    if (option && typeof option === "object") {
        GaugeChart.setOption(option, true);
    }
     function resize () {
        setTimeout(function () {
            line2Chart.resize();
        }, 0);
    };
});
// Mean Time To Repair chart
$(document).ready(function () {
    $(window).resize();
    var Gauge2 = document.getElementById("TimeRepairChart");
    var Gauge2Chart = echarts.init(Gauge2);
    var app2 = {};
    option = {
        responsive: true,
        maintainAspectRatio: false,
        toolbox: { show: false },
        tooltip: { formatter: '{a} <br/>{b} : {c}' },
        title: { show: false },
        series: [
            {
                name: "MTTR",
                type: "gauge",
                detail: {
                    formatter: '{value} Hrs',
                    show: true,
                    offsetCenter: [0, 36],
                    fontSize: 15,
                },
                data: [{ value: 90, name: "" }],
                startAngle: 180,
                clockwise: true,
                endAngle: 0,
                radius: "100%"
            }]
    };

    if (option && typeof option === "object") {
        Gauge2Chart.setOption(option, true);
    }

});