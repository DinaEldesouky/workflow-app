//----------------------------------------------------------------------------------3-9-2020 ----------------------------------------------------------------------------
// ------------------------------------ charts ------------------------------------ #d48265
//barChart
$(document).ready(function () {
    var bar = document.getElementById("barChart");
    var barChart = echarts.init(bar);
    var app = {};
    option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            orient: "horizontal",
            center: '',
            top: 10,
            textStyle: {
                fontSize: 10
            },
            data: ['Current', 'Previous']
        },
        grid: { top: "15%",bottom:"18%" },
        xAxis: {
            name: "Assets",
            type: 'category',
            data: ['AHU-001', 'AHU-002', 'AHU-003', 'AHU-004', 'AHU-005', 'AHU-006', 'AHU-007', 'AHU-008', 'AHU-009', 'AHU-010'],
            axisTick: {
                show: true
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                rotate:-20
            },
            nameTextStyle: {
                fontWeight: "bold"
            },
            z: 10
        },
        yAxis: {
            nameLocation: "middle",
            nameTextStyle: {
                align: "center",
                verticalAlign: "bottom",
                lineHeight: 65,
                fontWeight: "bold"
            },
            name: "Dollars",
            type: 'value',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
        },
        series: [{
            name: 'Current',
            type: 'bar',
            itemStyle: {
                color: "#337ab7",
            },
            data: [1200, 2000, 1500, 8000, 7000, 1100, 1300, 6700, 7700, 9000],
        },
            {
                name: 'Previous',
                data: [2200, 2600, 3500, 7000, 3000, 8100, 6300, 7700, 2700, 8000],
                type: 'line',
                lineStyle: {
                    color: "#c23531",
                    width: 2,
                    type: "solid",
                },
                itemStyle: {
                    borderWidth: 4,
                    borderColor: "#c23531",
                    color: "",
                },
            },
]
    };
    if (option && typeof option === "object") {
        barChart.setOption(option, true);
    };
    $(window).on('resize', resize);
    function resize () {
        setTimeout(function () {
            barChart.resize();
        }, 0);
    };

});
  //lineChart
$(document).ready(function () {
 $(window).resize();
    var line = document.getElementById("lineChart");
    var lineChart = echarts.init(line);
    var app = {};
    option = {
        legend: {
            orient: "horizontal",
            center: '',
            top: 10,
            textStyle: {
                fontSize: 10
            },
            data: ['Current', 'Previous']
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: { top: "15%", bottom: "20%"},
        xAxis: {
            name: "Assets",
            type: 'category',
            data: ['PRD-PLUM CREEK', 'PRD-CAMAS', 'CONV-003-MAIN', 'CONV-003-D2R', 'AHU-003', 'CONV-001-MAIN', 'AHU-001', 'CONV-002-D2R', 'AHU-009', 'HVAC-010'],
            axisTick: {
                show: true
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                rotate: -20
            },
            nameTextStyle: {
                fontWeight: "bold"
            }
        },
        yAxis: {
            nameLocation: "middle",
            nameTextStyle: {
                align: "center",
                verticalAlign: "bottom",
                lineHeight: 60,
                fontWeight: "bold"
            },

            name: "Hours",
            type: 'value',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
        },
        series: [
            {
            name: 'Current',
            data: [50, 49, 90, 93, 52, 43, 23, 81, 46, 55],
            type: 'bar',
                itemStyle: {
                    color: "#337ab7",
                },
        },
            {
                name: 'Previous',
                data: [20, 42, 30, 73, 12, 13, 13, 11, 16, 35],
                type: 'line',
                lineStyle: {
                    color: "#d48265",
                    width: 2,
                    type: "solid",
                },
                itemStyle: {
                    borderWidth: 4,
                    borderColor: "#d48265",
                    color: "#d48265",
                },
            }
        ]
    };
    if (option && typeof option === "object") {
        lineChart.setOption(option, true);
    };
    $(window).on('resize', resize);
    function resize () {
        setTimeout(function () {
            lineChart.resize();
        }, 0);
    };
});
 //lineChart
$(document).ready(function () {

    var line2 = document.getElementById("line2Chart");
    var line2Chart = echarts.init(line2);
    var app = {};
    option = {
        legend: {
            orient: "horizontal",
            center: '',
            top: 10,
            textStyle: {
                fontSize: 10
            },
            data: ['Current', 'Previous']
        },
            tooltip: {
                trigger: 'axis'
            },
            grid: { top: "15%", bottom: "20%" },
            xAxis: {
                name: "Assets",
                type: 'category',
                data: ['PRD-PLUM CREEK', 'PRD-CAMAS', 'CONV-003-MAIN', 'CONV-003-D2R', 'AHU-003', 'CONV-001-MAIN', 'AHU-001', 'CONV-002-D2R', 'AHU-009', 'HVAC-010'],
                axisTick: {
                    show: true
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    rotate: -20
                },
                nameTextStyle: {
                    fontWeight: "bold"
                }
            },
            yAxis: {
                nameLocation: "middle",
                nameTextStyle: {
                    align: "center",
                    verticalAlign: "bottom",
                    lineHeight: 60,
                    fontWeight: "bold"
                },
                name: "Hours",
                type: 'value',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
            },
            series: [{
                name: 'Current',
                data: [50, 49, 90, 93, 52, 43, 23, 81, 46, 55],
             type: 'bar',
                itemStyle: {
                    color: "#337ab7",
                },
            },
            {
                name: 'Previous',
                data: [20, 42, 30, 73, 12, 13, 13, 11, 16, 35],
                type: 'line',
                lineStyle: {
                    color: "#d48265",
                    width: 2,
                    type: "solid",
                },
                itemStyle: {
                    borderWidth: 4,
                    borderColor: "#d48265",
                    borderType: "solid",
                    color: "#d48265",
                },
            }]
        };
    if (option && typeof option === "object") {
        line2Chart.setOption(option, true);
    };
    $(window).resize();
    $(window).on('resize', resize);
    function resize () {
        setTimeout(function () {
            line2Chart.resize();
        }, 0);
    };
});
